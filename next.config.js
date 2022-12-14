/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      'img.freepik.com',
      'pt.wikipedia.org'
    ]
  }
}

module.exports = nextConfig
