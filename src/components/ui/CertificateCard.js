'use client'

import Link from 'next/link'
import { useState } from 'react'
import CertificateModal from './CertificateModal'

export default function CertificateCard({ certificate }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-[#A78BFA]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#A78BFA]/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Certificate Logo/Icon */}
      <div className="flex items-center gap-3 mb-4">
        {certificate.logoUrl ? (
          <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-3 group-hover:scale-105 transition-transform">
            <img
              src={certificate.logoUrl}
              alt={`${certificate.title} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-[#A78BFA]/20 rounded-lg flex items-center justify-center group-hover:bg-[#A78BFA]/30 transition-colors">
            <svg className="w-6 h-6 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        )}
        <h3 className="text-lg font-semibold text-white group-hover:text-[#A78BFA] transition-colors">
          {certificate.title}
        </h3>
      </div>

      {/* Certificate Details */}
      <div className="space-y-2 mb-4">
        {certificate.certificateNo && (
          <p className="text-sm text-gray-400">
            <span className="text-gray-500">Certificate No:</span> {certificate.certificateNo}
          </p>
        )}
        {certificate.issuedDate && (
          <p className="text-sm text-gray-400">
            <span className="text-gray-500">Issued:</span> {certificate.issuedDate}
          </p>
        )}
        {certificate.issuer && (
          <p className="text-sm text-gray-400">
            <span className="text-gray-500">Issued by:</span> {certificate.issuer}
          </p>
        )}
        {certificate.description && (
          <p className="text-sm text-gray-300 mt-3 leading-relaxed">
            {certificate.description}
          </p>
        )}
      </div>

      {/* Hover Actions */}
      <div className={`flex gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {certificate.pdfUrl && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#A78BFA]/20 hover:bg-[#A78BFA]/30 text-[#A78BFA] hover:text-white rounded-lg transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Certificate
          </button>
        )}
        {certificate.verifyUrl && (
          <Link
            href={certificate.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Verify
          </Link>
        )}
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={certificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

