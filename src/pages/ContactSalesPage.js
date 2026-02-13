'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    workEmail: '',
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
    country: '',
    emailUpdates: false,
    consentToPrivacy: false
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setIsLoading(true)

    // Validate form
    const newErrors = {}

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Invalid email format'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    }

    if (!formData.country) {
      newErrors.country = 'Country is required'
    }

    if (!formData.consentToPrivacy) {
      newErrors.consentToPrivacy = 'You must consent to the Privacy Policy'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      // Here you would send the form data to your API
      console.log('Contact sales form submitted:', formData)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Show success message or redirect
      alert('Thank you! We will contact you soon.')
      setFormData({
        workEmail: '',
        firstName: '',
        lastName: '',
        company: '',
        phoneNumber: '',
        country: '',
        emailUpdates: false,
        consentToPrivacy: false
      })
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'India',
    'Japan',
    'China',
    'Brazil',
    'Mexico',
    'Other'
  ]

  const benefits = [
    {
      title: 'Track Screen Time & Analyze Sessions',
      description: 'Gain deep insights into how users interact with your mobile app. Make data-driven decisions with our AI-powered analytics platform.'
    },
    {
      title: 'Understand Behavior Patterns & Flow States',
      description: 'Discover how users interact with your digital products. Our behavioral models derive flow state duration, distraction intensity, and recovery patterns to help you make data-driven decisions.'
    },
    {
      title: 'Privacy-Safe Data Capture & Insights',
      description: 'Capture session time, focus windows, and app-switching signals while maintaining privacy. Our data foundation ensures your insights are both powerful and compliant.'
    },
    {
      title: 'Drive Action with Behavioral Intelligence',
      description: 'Turn behavioral insights into actionable improvements. Optimize product decisions, enhance user experience, and improve digital productivity with confidence.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Section - Content */}
        <div className="bg-gray-50 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Logo */}
            <div className="mb-12">
              <img
                src="/img/Cognera_log_bg_removed.png"
                alt="Cognera Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
              Understand User Behavior with Cognera
            </h1>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Track Screen Time & Analyze Sessions
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Gain deep insights into how users interact with your mobile app. Make data-driven decisions with our AI-powered analytics platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Understand Behavior Patterns & Flow States
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Discover how users interact with your digital products. Our behavioral models derive flow state duration, distraction intensity, and recovery patterns to help you make data-driven decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Privacy-Safe Data Capture & Insights
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Capture session time, focus windows, and app-switching signals while maintaining privacy. Our data foundation ensures your insights are both powerful and compliant.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Drive Action with Behavioral Intelligence
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Turn behavioral insights into actionable improvements. Optimize product decisions, enhance user experience, and improve digital productivity with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-l border-gray-100">
          <div className="max-w-lg mx-auto w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Talk to a digital productivity expert
            </h2>
            <p className="text-gray-600 mb-8">
              Want to see how Cognera can help you track screen time, analyze sessions, and gain deep insights? We&apos;d love to chat.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.submit && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{errors.submit}</p>
                </div>
              )}

              <Input
                label="Work Email"
                type="email"
                name="workEmail"
                placeholder="Work Email"
                value={formData.workEmail}
                onChange={handleChange}
                className="light-input"
                required
              />
              {errors.workEmail && (
                <p className="text-red-500 text-xs mt-1 mb-2">{errors.workEmail}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="light-input"
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 mb-2">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="light-input"
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 mb-2">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <Input
                label="Company"
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="light-input"
                required
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1 mb-2">{errors.company}</p>
              )}

              <Input
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="light-input"
                required
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1 mb-2">{errors.phoneNumber}</p>
              )}

              <div>
                <label className="block text-sm font-bold mb-2 text-left text-gray-800">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7440FA] focus:border-[#7440FA] transition-all"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1 mb-2">{errors.country}</p>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <Checkbox
                  name="emailUpdates"
                  label="I&apos;d like to receive emails about news & updates from Cognera."
                  checked={formData.emailUpdates}
                  onChange={handleChange}
                  isLight={true}
                />

                <div>
                  <Checkbox
                    name="consentToPrivacy"
                    label={
                      <>
                        I consent to Cognera processing my personal data in accordance with our{' '}
                        <a href="/privacy" className="text-[#7440FA] hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </>
                    }
                    checked={formData.consentToPrivacy}
                    onChange={handleChange}
                    isLight={true}
                    required
                  />
                  {errors.consentToPrivacy && (
                    <p className="text-red-500 text-xs mt-1">{errors.consentToPrivacy}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full mt-6"
                style={{ backgroundColor: '#7440FA' }}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Contact Sales'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

