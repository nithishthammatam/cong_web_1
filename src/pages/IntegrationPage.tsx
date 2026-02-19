'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function IntegrationPage() {
  const [completedSteps, setCompletedSteps] = useState([1]) // Step 1 completed
  const [expandedTroubleshooting, setExpandedTroubleshooting] = useState(null)
  const [connectionStatus, setConnectionStatus] = useState('idle') // idle, testing, success, error
  const [copiedItems, setCopiedItems] = useState({})

  const apiKey = 'ck_a1b2c3d4e5f6g7h8i9j0'
  const maskedApiKey = 'ck_a1b2...••••'

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text)
    setCopiedItems({ ...copiedItems, [key]: true })
    setTimeout(() => {
      setCopiedItems({ ...copiedItems, [key]: false })
    }, 2000)
  }

  const toggleStep = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId))
    } else {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  const testConnection = () => {
    setConnectionStatus('testing')
    setTimeout(() => {
      setConnectionStatus('success')
      if (!completedSteps.includes(4)) {
        setCompletedSteps([...completedSteps, 4])
      }
    }, 2000)
  }

  const steps = [
    {
      id: 1,
      title: 'Add SDK to Project',
      estimatedTime: '2 minutes',
      completed: completedSteps.includes(1),
      subSteps: [
        {
          id: '1.1',
          instruction: 'Create libs folder if it doesn\'t exist',
          type: 'command',
          command: 'mkdir -p app/libs',
        },
        {
          id: '1.2',
          instruction: 'Place cognera-sdk.aar in app/libs/',
          type: 'visual',
          folderStructure: `YourApp/
├── app/
│   ├── libs/
│   │   └── cognera-sdk.aar ← Place here
│   ├── src/
│   └── build.gradle
├── gradle/
└── settings.gradle`,
        },
        {
          id: '1.3',
          instruction: 'Add SDK dependency to app/build.gradle',
          type: 'code',
          language: 'groovy',
          code: `dependencies {
    // Add Cognera SDK
    implementation files('libs/cognera-sdk.aar')
    
    // Your existing dependencies
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.android.material:material:1.9.0'
}`,
          highlightLine: 3,
        },
      ],
    },
    {
      id: 2,
      title: 'Initialize SDK',
      estimatedTime: '3 minutes',
      completed: completedSteps.includes(2),
      subSteps: [
        {
          id: '2.1',
          instruction: 'Create or update your Application class',
          type: 'code',
          language: 'java',
          code: `package com.yourapp;

import android.app.Application;
import com.cognera.sdk.Cognera;
import com.cognera.sdk.CogneraConfig;

public class MyApp extends Application {
    
    @Override
    public void onCreate() {
        super.onCreate();
        
        // Initialize Cognera SDK
        CogneraConfig config = new CogneraConfig.Builder()
            .setApiKey("YOUR_API_KEY_HERE")
            .setDebugMode(BuildConfig.DEBUG) // Optional
            .build();
            
        Cognera.init(this, config);
    }
}`,
          highlightLines: [10, 11, 12],
          alert: {
            type: 'warning',
            message: '⚠️ Replace YOUR_API_KEY_HERE with your actual API key',
            apiKey: apiKey,
          },
        },
        {
          id: '2.2',
          instruction: 'Register Application class in AndroidManifest.xml',
          type: 'code',
          language: 'xml',
          code: `<!-- AndroidManifest.xml -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yourapp">
    
    <application
        android:name=".MyApp"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme">
        
        <activity android:name=".MainActivity">
            <!-- ... -->
        </activity>
        
    </application>
    
</manifest>`,
          highlightLine: 6,
          highlightNote: 'Add android:name=".MyApp" to <application> tag',
        },
      ],
    },
    {
      id: 3,
      title: 'Add Required Permissions',
      estimatedTime: '1 minute',
      completed: completedSteps.includes(3),
      subSteps: [
        {
          id: '3.1',
          instruction: 'Add INTERNET permission to AndroidManifest.xml',
          type: 'code',
          language: 'xml',
          code: `<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yourapp">
    
    <!-- Add this permission -->
    <uses-permission android:name="android.permission.INTERNET" />
    
    <application ...>
        <!-- Your app components -->
    </application>
    
</manifest>`,
          highlightLine: 4,
          info: {
            type: 'info',
            message: 'ℹ️ INTERNET is the ONLY permission we require. We don\'t access location, contacts, storage, camera, or any other sensitive data.',
          },
        },
      ],
    },
    {
      id: 4,
      title: 'Test Integration',
      estimatedTime: '2 minutes',
      completed: completedSteps.includes(4),
      subSteps: [
        {
          id: '4.1',
          instruction: 'Build and run your app',
          type: 'checklist',
          items: [
            { text: 'Build completes without errors', icon: '✓' },
            { text: 'App launches successfully', icon: '✓' },
            { text: 'No crash on startup', icon: '✓' },
          ],
        },
        {
          id: '4.2',
          instruction: 'Check Logcat for success messages',
          type: 'log',
          filterTag: 'Cognera',
          expectedLogs: [
            { level: 'INFO', tag: 'Cognera', message: 'SDK initialized successfully' },
            { level: 'INFO', tag: 'Cognera', message: 'Session started - ID: sess_abc123' },
            { level: 'DEBUG', tag: 'Cognera', message: 'Connected to analytics server' },
          ],
          filterCommand: 'adb logcat -s Cognera:*',
        },
        {
          id: '4.3',
          instruction: 'Verify connection in dashboard',
          type: 'test',
          testButton: true,
        },
      ],
      troubleshooting: [
        {
          problem: 'Build fails with "SDK not found"',
          solution: 'Make sure cognera-sdk.aar is in app/libs/ folder and you\'ve synced Gradle.',
        },
        {
          problem: 'SDK not initialized error in Logcat',
          solution: 'Check that you\'ve registered your Application class in AndroidManifest.xml with android:name attribute.',
        },
        {
          problem: 'No data appears in dashboard',
          solution: 'Verify your API key is correct and your device has internet connection. Check Logcat for error messages.',
        },
        {
          problem: 'App crashes on launch',
          solution: 'Make sure you\'re calling Cognera.init() in Application.onCreate(), not in Activity.',
        },
      ],
    },
  ]

  const allStepsCompleted = completedSteps.length === steps.length

  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3">
          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-purple-primary mb-1">Step 02 of 04 • Integration</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-navy-dark">Integrate SDK in app</h1>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>

          {/* INTEGRATION STEPS */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="bg-white border border-gray-200 rounded-xl p-6">
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                      step.completed
                        ? 'bg-success text-white'
                        : 'bg-purple-primary/10 text-purple-primary'
                    }`}
                  >
                    {step.completed ? '✓' : step.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold text-navy-dark">{step.title}</h2>
                      <span className="text-xs text-gray-500">~{step.estimatedTime}</span>
                      {step.completed && (
                        <span className="px-2 py-0.5 bg-success/20 text-success text-xs font-bold rounded">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sub-steps */}
                <div className="space-y-6 ml-14">
                  {step.subSteps.map((subStep) => (
                    <div key={subStep.id} className="border-l-2 border-gray-200 pl-6 pb-6 last:pb-0">
                      <h3 className="text-sm font-semibold text-navy-dark mb-3">{subStep.instruction}</h3>

                      {/* Command */}
                      {subStep.type === 'command' && (
                        <div className="bg-gray-900 rounded-lg p-4 mb-3">
                          <div className="flex items-center justify-between">
                            <code className="text-green-400 font-mono text-sm">{subStep.command}</code>
                            <button
                              onClick={() => handleCopy(`cmd-${subStep.id}`, subStep.command)}
                              className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded"
                            >
                              {copiedItems[`cmd-${subStep.id}`] ? 'Copied!' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Visual Folder Structure */}
                      {subStep.type === 'visual' && (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3">
                          <pre className="text-xs font-mono text-navy-dark whitespace-pre">
                            {subStep.folderStructure}
                          </pre>
                          <p className="text-xs text-gray-500 mt-2">
                            💡 Tip: Drag and drop the AAR file into Android Studio, or copy it manually using file explorer
                          </p>
                        </div>
                      )}

                      {/* Code Block */}
                      {subStep.type === 'code' && (
                        <div className="mb-3">
                          <div className="bg-gray-900 rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                              <span className="text-xs text-gray-400 uppercase">{subStep.language}</span>
                              <button
                                onClick={() => handleCopy(`code-${subStep.id}`, subStep.code)}
                                className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded"
                              >
                                {copiedItems[`code-${subStep.id}`] ? 'Copied!' : 'Copy Code'}
                              </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                              <pre className="text-sm font-mono text-gray-100">
                                <code>
                                  {subStep.code.split('\n').map((line, i) => {
                                    const lineNum = i + 1
                                    const isHighlighted =
                                      subStep.highlightLine === lineNum ||
                                      (subStep.highlightLines && subStep.highlightLines.includes(lineNum))
                                    return (
                                      <div
                                        key={i}
                                        className={isHighlighted ? 'bg-purple-primary/20 px-2 -mx-2 rounded' : ''}
                                      >
                                        <span className="text-gray-500 mr-4 select-none">{lineNum}</span>
                                        {line || ' '}
                                      </div>
                                    )
                                  })}
                                </code>
                              </pre>
                            </div>
                          </div>
                          {subStep.highlightNote && (
                            <p className="text-xs text-purple-primary mt-2 font-semibold">
                              {subStep.highlightNote}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Alert Box */}
                      {subStep.alert && (
                        <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-3">
                          <p className="text-sm font-semibold text-warning mb-2">{subStep.alert.message}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-navy-dark">Your API Key:</span>
                            <code className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-200">
                              {subStep.alert.apiKey}
                            </code>
                            <button
                              onClick={() => handleCopy('api-key', subStep.alert.apiKey)}
                              className="text-xs text-purple-primary hover:underline font-semibold"
                            >
                              {copiedItems['api-key'] ? 'Copied!' : 'Copy'}
                            </button>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">⚠️ Never commit API keys to Git!</p>
                        </div>
                      )}

                      {/* Info Box */}
                      {subStep.info && (
                        <div className="bg-purple-primary/10 border border-purple-primary/20 rounded-lg p-4 mb-3">
                          <p className="text-sm text-navy-dark">{subStep.info.message}</p>
                        </div>
                      )}

                      {/* Checklist */}
                      {subStep.type === 'checklist' && (
                        <div className="space-y-2 mb-3">
                          {subStep.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                              <span className="text-success">{item.icon}</span>
                              {item.text}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Log Viewer */}
                      {subStep.type === 'log' && (
                        <div className="mb-3">
                          <div className="bg-gray-900 rounded-lg p-4 mb-2">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-gray-400">Filter Tag: {subStep.filterTag}</span>
                              <button
                                onClick={() => handleCopy('log-filter', subStep.filterCommand)}
                                className="text-xs text-green-400 hover:text-green-300"
                              >
                                {copiedItems['log-filter'] ? 'Copied!' : 'Copy Filter'}
                              </button>
                            </div>
                            <div className="space-y-1">
                              {subStep.expectedLogs.map((log, i) => (
                                <div key={i} className="text-xs font-mono">
                                  <span className="text-gray-500">{log.level}</span>
                                  <span className="text-purple-400">/{log.tag}</span>
                                  <span className="text-gray-300">: {log.message}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">
                            Run: <code className="bg-gray-100 px-1 rounded">{subStep.filterCommand}</code>
                          </p>
                        </div>
                      )}

                      {/* Test Button */}
                      {subStep.type === 'test' && subStep.testButton && (
                        <div className="mb-3">
                          <button
                            onClick={testConnection}
                            disabled={connectionStatus === 'testing'}
                            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                              connectionStatus === 'success'
                                ? 'bg-success text-white'
                                : connectionStatus === 'error'
                                ? 'bg-error text-white'
                                : 'bg-purple-primary text-white hover:bg-purple-dark'
                            } disabled:opacity-50`}
                          >
                            {connectionStatus === 'idle' && 'Test Connection'}
                            {connectionStatus === 'testing' && 'Checking connection...'}
                            {connectionStatus === 'success' && '✓ Connected successfully!'}
                            {connectionStatus === 'error' && '✗ Connection failed'}
                          </button>
                          <p className="text-xs text-gray-600 mt-2">
                            You should see your app appear in the dashboard with a 'Connected' status within 10 seconds.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Troubleshooting */}
                  {step.troubleshooting && (
                    <div className="border-l-2 border-gray-200 pl-6">
                      <button
                        onClick={() => setExpandedTroubleshooting(expandedTroubleshooting === step.id ? null : step.id)}
                        className="flex items-center justify-between w-full text-left mb-3"
                      >
                        <h3 className="text-sm font-semibold text-navy-dark">Troubleshooting</h3>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedTroubleshooting === step.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedTroubleshooting === step.id && (
                        <div className="space-y-3">
                          {step.troubleshooting.map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                              <p className="text-sm font-semibold text-navy-dark mb-1">{item.problem}</p>
                              <p className="text-xs text-text-secondary">{item.solution}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Verification Checkbox */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <input
                      type="checkbox"
                      id={`step-${step.id}`}
                      checked={step.completed}
                      onChange={() => toggleStep(step.id)}
                      className="w-5 h-5 rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                    />
                    <label htmlFor={`step-${step.id}`} className="text-sm font-semibold text-navy-dark cursor-pointer">
                      I've completed this step
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/get-sdk"
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Get SDK
            </Link>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors">
              Save Progress
            </button>
            <Link
              href="/get-sdk/tracking"
              className={`px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 ${
                allStepsCompleted
                  ? 'bg-purple-primary text-white hover:bg-purple-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next: Start Tracking
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-8 space-y-6">
            {/* Progress Tracker */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy-dark mb-4">Your Progress</h3>
              <div className="space-y-3">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center gap-2">
                    {step.completed ? (
                      <span className="text-success text-lg">✓</span>
                    ) : completedSteps.includes(step.id - 1) || step.id === 1 ? (
                      <span className="text-purple-primary text-lg">⊙</span>
                    ) : (
                      <span className="text-gray-300 text-lg">○</span>
                    )}
                    <span
                      className={`text-xs ${
                        step.completed
                          ? 'text-success font-semibold'
                          : step.id === 2
                          ? 'text-purple-primary font-semibold'
                          : 'text-gray-500'
                      }`}
                    >
                      Step {step.id}: {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy-dark mb-4">Need Help?</h3>
              <div className="space-y-3">
                <Link
                  href="/support/chat"
                  className="flex items-center gap-2 text-sm text-purple-primary hover:underline"
                >
                  <span>💬</span>
                  Live Chat Support
                  <span className="ml-auto px-2 py-0.5 bg-success/20 text-success text-xs rounded">Online</span>
                </Link>
                <Link href="/docs/integration" className="flex items-center gap-2 text-sm text-purple-primary hover:underline">
                  <span>📖</span>
                  Full Documentation
                </Link>
                <Link href="/tutorials/integration" className="flex items-center gap-2 text-sm text-purple-primary hover:underline">
                  <span>🎥</span>
                  Video Tutorial
                  <span className="ml-auto text-xs text-gray-500">5 min</span>
                </Link>
              </div>
            </div>

            {/* Configuration Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-navy-dark mb-4">Configuration</h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">SDK Version</span>
                  <span className="font-semibold text-navy-dark">v1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Platform</span>
                  <span className="font-semibold text-navy-dark">Android</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">API Key</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-navy-dark">{maskedApiKey}</span>
                    <button
                      onClick={() => handleCopy('sidebar-api-key', apiKey)}
                      className="text-purple-primary hover:underline text-xs"
                    >
                      {copiedItems['sidebar-api-key'] ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">App Name</span>
                  <span className="font-semibold text-navy-dark">MyAwesomeApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
