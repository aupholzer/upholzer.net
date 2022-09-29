/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  exportPathMap: async (defaultPathMap,
    { dev, dir, outDir, distDir, buildId }) => ({
      '/': { page: '/' },
    }),
}