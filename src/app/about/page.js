'use client'

import CertificateCard from '@/components/ui/CertificateCard'

// Modular Certificate Data - Easy to add more certificates
const certificates = [
  {
    id: 1,
    title: 'Startup India Recognition',
    certificateNo: 'DIPP242921',
    issuedDate: 'February 6, 2026',
    issuer: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India',
    description: 'Officially recognized as a startup by the Department for Promotion of Industry and Internal Trade. Valid for ten years from the date of incorporation (until November 6, 2035).',
    logoUrl: '/img/Startup-India_Preview.png', // Startup India logo
    pdfUrl: '/certificates/dpiit-startup-certificate.pdf', // Add PDF path when available
    verifyUrl: 'https://www.startupindia.gov.in/' // Optional verification link
  },
  {
    id: 2,
    title: 'Udyam Registration',
    certificateNo: 'UDYAM-TS-02-0296622',
    issuedDate: 'December 12, 2025',
    issuer: 'Ministry of Micro, Small & Medium Enterprises, Government of India',
    description: 'Registered as a Micro Enterprise. Major activities include computer programming, consultancy, software publishing, software support and maintenance, and retail sale of computers, peripheral units, and software.',
    logoUrl: '/img/msme-logo.jpeg', // MSME logo
    pdfUrl: '/certificates/udyam-certificate.pdf', // Add PDF path when available
    verifyUrl: 'https://udyamregistration.gov.in/' // Optional verification link
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-18 pb-8 sm:pb-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            >
              Data-Driven Innovation
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Transforming raw data into actionable insights that drive business growth and digital productivity.
            </p>
          </div>
        </section>


        {/* Accreditation & Recognition Gallery */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 text-center"
            >
              Accreditation & Recognition
            </h2>
            <p
              className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base"
            >
              Recognized by leading government bodies and industry organizations
            </p>

            {/* Modular Certificate Grid - Automatically adjusts for new certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8"
            >
              Company Information
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                  >
                    Entity Name
                  </h3>
                  <p
                    className="text-gray-300"
                  >
                    Cognera Data Labs Private Limited
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                  >
                    Date of Incorporation
                  </h3>
                  <p
                    className="text-gray-300"
                  >
                    November 7, 2025
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                  >
                    Industry
                  </h3>
                  <p
                    className="text-gray-300"
                  >
                    Analytics Industry
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                  >
                    Sector
                  </h3>
                  <p
                    className="text-gray-300"
                  >
                    Data Science
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                  >
                    Enterprise Type
                  </h3>
                  <p
                    className="text-gray-300"
                  >
                    Micro
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                  >
                    Location
                  </h3>
                  <p
                    className="text-gray-300"
                  >
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

