'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export default function DashboardPage() {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Dashboard component states
    const [expandedFAQ, setExpandedFAQ] = useState(null)
    const [completedSteps, setCompletedSteps] = useState([1, 2, 3])

    const toggleStep = (stepId) => {
        if (completedSteps.includes(stepId)) {
            setCompletedSteps(completedSteps.filter(id => id !== stepId))
        } else {
            setCompletedSteps([...completedSteps, stepId])
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push('/login')
            } else {
                setUser(currentUser)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [router])

    const handleSignOut = async () => {
        try {
            await signOut(auth)
            router.push('/login')
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }

    const dashboardFeatures = [
        {
            id: 'real-time',
            icon: '⚡',
            title: 'Real-Time Analytics',
            description: 'Watch your data update live as users engage',
            badge: 'Updates every 2s',
        },
        {
            id: 'flow-timeline',
            icon: '📊',
            title: 'Flow State Visualization',
            description: 'Track engagement quality and attention patterns',
        },
        {
            id: 'cohorts',
            icon: '👥',
            title: 'Smart User Segmentation',
            description: 'Automatically grouped by behavior patterns',
        },
        {
            id: 'distraction',
            icon: '🔍',
            title: 'Distraction Mapping',
            description: 'Identify exactly what breaks user focus',
        },
        {
            id: 'trends',
            icon: '📈',
            title: 'Engagement Trends',
            description: 'Track how your metrics improve over time',
        },
        {
            id: 'ai-insights',
            icon: '🤖',
            title: 'AI-Powered Insights',
            description: 'Get actionable product optimization suggestions',
            badge: 'Powered by AI',
        },
        {
            id: 'date-ranges',
            icon: '📅',
            title: 'Flexible Time Periods',
            description: 'Analyze any time range that matters',
        },
        {
            id: 'export',
            icon: '📤',
            title: 'Reports & Exports',
            description: 'Share insights with stakeholders',
        },
    ]

    const sampleInsights = [
        {
            category: 'Behavior Pattern',
            icon: '💡',
            color: 'purple',
            insight: 'Users entering from Instagram show 67% higher distraction rate',
            impact: 'Affects 23% of sessions',
            recommendation:
                'Consider adding an onboarding focus mode for users from social media to help them transition into productive usage',
        },
        {
            category: 'Engagement Timing',
            icon: '⏱️',
            color: 'blue',
            insight: 'Peak engagement occurs at 3.5 minute mark with 85% flow retention',
            impact: 'Opportunity to increase retention by 15%',
            recommendation:
                'Introduce a progress milestone or achievement at the 3-minute mark to sustain user flow state and prevent drop-offs',
        },
        {
            category: 'Drop-Off Analysis',
            icon: '📱',
            color: 'green',
            insight: '45% of session exits are preceded by notification interruptions',
            impact: 'Could recover 180 sessions/day',
            recommendation:
                'Implement a "Do Not Disturb" mode during key user actions to reduce interruption-driven exits',
        },
    ]

    const optimizationTips = [
        {
            title: 'Set Up Weekly Email Reports',
            description: 'Get insights delivered to your inbox automatically',
            action: 'Configure Email Reports',
        },
        {
            title: 'Create Custom Segments',
            description: 'Track specific user cohorts that matter',
            action: 'Create First Segment',
        },
        {
            title: 'Set Up Smart Alerts',
            description: 'Get notified when metrics spike or drop',
            action: 'Configure Alerts',
        },
        {
            title: 'Invite Your Team',
            description: 'Collaborate on insights with your team',
            action: 'Invite Team Members',
        },
    ]

    const nextSteps = [
        { task: 'Explore your dashboard', completed: completedSteps.includes(1) },
        { task: 'Create your first segment', completed: completedSteps.includes(2) },
        { task: 'Set up email reports', completed: completedSteps.includes(3) },
        { task: 'Invite team members', completed: completedSteps.includes(4) },
        { task: 'Review AI insights', completed: completedSteps.includes(5) },
        { task: 'Export your first report', completed: completedSteps.includes(6) },
        { task: 'Join community forum', completed: completedSteps.includes(7) },
    ]

    const resourceLinks = [
        { icon: '📖', title: 'Complete Documentation', description: 'Learn every feature in detail', url: '/docs' },
        { icon: '🎥', title: 'Video Tutorials', description: 'Watch step-by-step guides', url: '/tutorials' },
        { icon: '💬', title: 'Community Forum', description: 'Connect with other users', url: '/community' },
        { icon: '🔧', title: 'API Reference', description: 'Full API documentation', url: '/docs/api' },
        { icon: '🆘', title: 'Customer Support', description: '24/7 support available', url: '/support', badge: '<2h' },
        { icon: '💡', title: 'Use Cases', description: 'Real-world examples', url: '/examples' },
    ]

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7440FA]"></div>
            </div>
        )
    }

    if (!user) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center gap-2">
                                <img
                                    className="h-8 w-auto"
                                    src="/img/Cognera_log_bg_removed.png"
                                    alt="Cognera"
                                />
                                <span className="text-xl font-bold text-gray-900">Cognera</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-700 hidden sm:block">
                                    {user.email}
                                </span>
                                <button
                                    onClick={handleSignOut}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#7440FA] hover:bg-[#6030d4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7440FA]"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4">
                {/* HEADER */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-sm font-semibold text-purple-primary mb-1">Step 04 of 04 • Your Analytics Dashboard</p>
                            <h1 className="text-3xl sm:text-4xl font-bold text-navy-dark">Insights and Dashboard</h1>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-primary h-2.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                </div>

                {/* SUCCESS CELEBRATION */}
                <div className="bg-gradient-to-r from-success/20 to-purple-primary/20 rounded-xl p-8 mb-8 text-center">
                    <div className="text-5xl mb-3">🎉</div>
                    <h2 className="text-3xl font-bold text-navy-dark mb-2">You're All Set!</h2>
                    <p className="text-lg text-text-secondary mb-6">Your app is now tracking behavioral analytics</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        {['SDK integrated', 'Tracking active', 'Data flowing', 'Dashboard ready'].map((item, i) => (
                            <div key={i} className="bg-white rounded-lg p-3 flex items-center gap-2 justify-center">
                                <span className="text-success text-xl">✓</span>
                                <span className="text-sm font-semibold text-navy-dark">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DASHBOARD OVERVIEW */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-navy-dark mb-2">Your Analytics Dashboard</h2>
                    <p className="text-text-secondary mb-6">One place where data becomes clarity</p>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {[
                                { label: 'Total Sessions', value: '1,247' },
                                { label: 'Avg Session', value: '8.5 min' },
                                { label: 'Flow State', value: '68%' },
                                { label: 'Active Users', value: '892' },
                            ].map((metric, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                                    <p className="text-xl font-bold text-navy-dark">{metric.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-900 rounded-lg p-6 mb-4">
                            <div className="h-48 flex items-end gap-1">
                                {[40, 65, 45, 80, 55, 90, 75, 60, 85, 70, 50, 95].map((h, i) => (
                                    <div key={i} className="flex-1 bg-purple-primary rounded-t" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-xs text-gray-500 mb-2">Behavior Cohorts</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-16 rounded-full border-4 border-success"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-navy-dark">Deep Focus: 35%</p>
                                        <p className="text-xs text-gray-600">Moderate: 42% • Distracted: 23%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-xs text-gray-500 mb-2">Top Distractions</p>
                                <ul className="space-y-1 text-sm text-text-secondary">
                                    <li>1. Notifications (40%)</li>
                                    <li>2. Instagram (25%)</li>
                                    <li>3. Messages (18%)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DASHBOARD FEATURES GRID */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-navy-dark mb-6">Everything You Need to Optimize Your App</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {dashboardFeatures.map((feature) => (
                            <div key={feature.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                                <div className="text-2xl mb-2">{feature.icon}</div>
                                <h3 className="text-lg font-bold text-navy-dark mb-1">{feature.title}</h3>
                                <p className="text-sm text-text-secondary mb-3">{feature.description}</p>
                                {feature.badge && (
                                    <span className="inline-block px-2 py-0.5 bg-purple-primary/20 text-purple-primary text-xs font-bold rounded mb-2">
                                        {feature.badge}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SAMPLE INSIGHTS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-navy-dark mb-2">AI Insights You'll Receive</h2>
                    <p className="text-text-secondary mb-6">Real examples from actual apps</p>
                    <div className="space-y-4">
                        {sampleInsights.map((insight, i) => (
                            <div
                                key={i}
                                className={`bg-white border-2 rounded-xl p-6 ${insight.color === 'purple'
                                        ? 'border-purple-primary/30 bg-purple-primary/5'
                                        : insight.color === 'blue'
                                            ? 'border-blue-500/30 bg-blue-50'
                                            : 'border-success/30 bg-success/5'
                                    }`}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-2xl">{insight.icon}</span>
                                    <div className="flex-1">
                                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded mb-2">
                                            {insight.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-navy-dark mb-1">{insight.insight}</h3>
                                        <p className="text-sm text-text-secondary mb-2">
                                            <strong>Impact:</strong> {insight.impact}
                                        </p>
                                        <p className="text-sm text-navy-dark">{insight.recommendation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DASHBOARD ACCESS */}
                <div className="bg-gradient-to-r from-purple-primary/10 to-purple-light/10 rounded-xl p-8 mb-12 text-center">
                    <h2 className="text-2xl font-bold text-navy-dark mb-2">Your Dashboard is Ready</h2>
                    <p className="text-lg text-text-secondary mb-6">Start exploring your user behavior data now</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/dashboard"
                            className="px-8 py-4 bg-purple-primary text-white rounded-lg font-bold hover:bg-purple-dark transition-colors flex items-center gap-2"
                        >
                            Open Dashboard
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/tutorials/dashboard-overview"
                            className="px-6 py-4 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors"
                        >
                            Take a Tour
                        </Link>
                        <Link
                            href="/tutorials/dashboard-overview"
                            className="px-6 py-4 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors"
                        >
                            Watch Tutorial
                        </Link>
                    </div>
                </div>

                {/* GETTING MOST VALUE */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-navy-dark mb-6">Get the Most Out of Cognera</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {optimizationTips.map((tip, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                                <h3 className="text-lg font-bold text-navy-dark mb-2">{tip.title}</h3>
                                <p className="text-sm text-text-secondary mb-4">{tip.description}</p>
                                <button className="text-sm text-purple-primary hover:underline font-semibold">{tip.action} →</button>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {['📧 Set Up Email Reports', '🔔 Configure Alerts', '👥 Invite Team', '🎯 Create Segments', '📊 Schedule Reports', '🔗 Integrate Tools'].map((action, i) => (
                            <button
                                key={i}
                                className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-navy-dark hover:bg-gray-50 transition-colors text-center"
                            >
                                {action}
                            </button>
                        ))}
                    </div>
                </div>

                {/* NEXT STEPS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-navy-dark mb-4">What's Next?</h2>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="space-y-3 mb-4">
                            {nextSteps.map((step, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={step.completed}
                                        onChange={() => toggleStep(i + 1)}
                                        className="w-5 h-5 rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                                    />
                                    <span className={`text-sm ${step.completed ? 'text-gray-500 line-through' : 'text-navy-dark'}`}>
                                        {step.task}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">
                            Progress: {completedSteps.length} of {nextSteps.length} completed
                        </p>
                    </div>
                </div>

                {/* RESOURCES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-navy-dark mb-6">Help & Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {resourceLinks.map((resource, i) => (
                            <Link
                                key={i}
                                href={resource.url}
                                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-2xl mb-2">{resource.icon}</div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-lg font-bold text-navy-dark">{resource.title}</h3>
                                    {resource.badge && (
                                        <span className="px-2 py-0.5 bg-success/20 text-success text-xs font-bold rounded">
                                            {resource.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-text-secondary">{resource.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* FEEDBACK */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-navy-dark mb-4">Help Us Improve</h2>
                    <p className="text-sm text-text-secondary mb-4">How was your integration experience?</p>
                    <div className="flex gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} className="text-2xl text-gray-300 hover:text-warning">
                                ★
                            </button>
                        ))}
                    </div>
                    <textarea
                        placeholder="Tell us what you liked or what could be better..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 text-sm"
                        rows={3}
                    />
                    <button className="px-6 py-2 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-dark transition-colors">
                        Submit Feedback
                    </button>
                </div>

                {/* FOOTER ACTIONS */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
                    <Link
                        href="/get-sdk/tracking"
                        className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Tracking
                    </Link>
                    <Link
                        href="/docs/integration-guide.pdf"
                        className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-navy-dark hover:bg-gray-50 transition-colors"
                    >
                        Download Guide PDF
                    </Link>
                </div>
            </div>
        </div>
    )
}
