/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['react-icons', 'react-icons/fi', 'aos'],
  },
  webpack: (config, { dev }) => {
    // Avoid EBUSY file-lock errors on Windows when webpack writes pack cache under .next
    if (dev) {
      config.cache = { type: 'memory' }
    }
    return config
  },
  async redirects() {
    return [
      { source: '/about', destination: '/principles', permanent: true },
      { source: '/project', destination: '/capabilities', permanent: true },
      { source: '/solutions', destination: '/capabilities', permanent: true },
      { source: '/quote', destination: '/contact', permanent: true },
      { source: '/service', destination: '/capabilities', permanent: true },
      { source: '/service/detail', destination: '/capabilities/detail', permanent: true },
      { source: '/how-we-work', destination: '/delivery', permanent: true },
    ]
  },
}

module.exports = nextConfig
