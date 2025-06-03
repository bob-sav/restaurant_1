/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // ✅ Disable Turbopack the correct way in Next.js 15+
  turbopack: false,
};

module.exports = nextConfig;
