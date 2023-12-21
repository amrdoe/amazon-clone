/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pngimg.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
