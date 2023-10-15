/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  compiler: {
    styledComponents: true,
  },
  output: "standalone",
  swcMinify: true,
  largePageDataBytes: 128 * 10000,
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_IS_PRODUCT != "devnet",
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
