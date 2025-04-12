/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  // Add trailingSlash for static export
  trailingSlash: true
}

module.exports = nextConfig 