/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// below line for the sake of using next/future/img
module.exports = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}
