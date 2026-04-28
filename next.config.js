/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['flagcdn.com'], // For country flags
  },
  // SEO optimizations
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
