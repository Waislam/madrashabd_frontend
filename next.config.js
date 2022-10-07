/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// below line for the sake of using next/future/img
module.exports = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
