'use client'

import Link from 'next/link'
import { useState } from 'react'
import CertificateModal from './CertificateModal'

export default function CertificateCard({ certificate }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 hover:border-[#6F2DBD]/30 hover:shadow-lg hover:shadow-[#6F2DBD]/5 transition-all duration-300">
      {/* Certificate Logo/Icon + Title */}
      <div className="flex items-start gap-4 mb-5">
        {certificate.logoUrl ? (
          <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-2.5 border border-gray-100 group-hover:border-[#6F2DBD]/20 group-hover:shadow-sm transition-all flex-shrink-0">
            <img
              src={certificate.logoUrl}
              alt={`${certificate.title} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-[#6F2DBD]/[0.06] rounded-xl flex items-center justify-center group-hover:bg-[#6F2DBD]/[0.1] transition-colors flex-shrink-0">
            <svg className="w-7 h-7 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        )}
        <div className="min-w-0 pt-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#6F2DBD] transition-colors leading-tight mb-1">
            {certificate.title}
          </h3>
          {certificate.certificateNo && (
            <p className="text-xs text-gray-400 font-mono">
              {certificate.certificateNo}
            </p>
          )}
        </div>
      </div>

      {/* Certificate Details */}
      <div className="space-y-2.5 mb-6">
        {certificate.issuedDate && (
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-500">Issued: <span className="text-gray-700 font-medium">{certificate.issuedDate}</span></span>
          </div>
        )}
        {certificate.issuer && (
          <div className="flex items-start gap-2 text-sm">
            <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-gray-400 leading-snug">{certificate.issuer}</span>
          </div>
        )}
      </div>

      {certificate.description && (
        <p className="text-sm text-gray-500 leading-relaxed mb-6 border-t border-gray-100 pt-4">
          {certificate.description}
        </p>
      )}

      {/* Action Buttons - Always visible */}
      <div className="flex gap-3">
        {certificate.pdfUrl && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#6F2DBD]/[0.06] hover:bg-[#6F2DBD]/[0.12] text-[#6F2DBD] rounded-xl transition-all text-sm font-semibold"
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
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded-xl transition-all text-sm font-semibold border border-gray-200/80"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
