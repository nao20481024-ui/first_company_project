/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/about', destination: '/principles', permanent: true },
      { source: '/project', destination: '/solutions', permanent: true },
    ]
  },
}

module.exports = nextConfig
