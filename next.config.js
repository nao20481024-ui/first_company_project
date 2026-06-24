/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      { source: '/project', destination: '/solutions', permanent: true },
    ]
  },
}

module.exports = nextConfig
