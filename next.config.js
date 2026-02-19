/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Only bundle Firebase modules that are actually imported (smaller route chunks, faster navigation)
  optimizePackageImports: ['firebase', 'firebase/auth'],
}

module.exports = nextConfig










