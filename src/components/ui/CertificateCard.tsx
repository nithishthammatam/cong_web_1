'use client'

export default function CertificateCard({ certificate }) {
  return (
    <div className="relative bg-white border border-gray-200/80 rounded-2xl p-6">
      {/* Certificate Logo/Icon + Title */}
      <div className="flex items-start gap-4 mb-5">
        {certificate.logoUrl ? (
          <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-2.5 border border-gray-100 flex-shrink-0">
            <img
              src={certificate.logoUrl}
              alt={`${certificate.title} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-[#6F2DBD]/[0.06] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        )}
        <div className="min-w-0 pt-1">
          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">
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
      <div className="border-t border-gray-100 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-semibold uppercase tracking-wider">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Certificate on Record
        </div>
      </div>
    </div>
  )
}
