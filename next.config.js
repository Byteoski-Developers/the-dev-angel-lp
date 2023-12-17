/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aut.ac.nz',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
