'use client'

import { useEffect } from 'react'

export default function CertificateModal({ certificate, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !certificate) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center p-4 pt-14 sm:pt-16 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[85vh] my-4 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/20 rounded-xl shadow-2xl overflow-hidden z-[201]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 relative z-[202]">
          <h3
            className="text-xl sm:text-2xl font-semibold text-white"
          >
            {certificate.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white hover:text-[#A78BFA] relative z-[203]"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="relative w-full" style={{ height: 'calc(90vh - 80px)' }}>
          {certificate.pdfUrl ? (
            <iframe
              src={`${certificate.pdfUrl}#toolbar=0`}
              className="w-full h-full border-0"
              title={certificate.title}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>Certificate not available</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-white/10 bg-[#0a0a0a]">
          <div className="text-sm text-gray-400">
            {certificate.certificateNo && (
              <span>Certificate No: {certificate.certificateNo}</span>
            )}
          </div>
          <div className="flex gap-3">
            {certificate.pdfUrl && (
              <a
                href={certificate.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#A78BFA]/20 hover:bg-[#A78BFA]/30 text-[#A78BFA] hover:text-white rounded-lg transition-all text-sm font-medium flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download
              </a>
            )}
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-sm font-medium flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Verify
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

