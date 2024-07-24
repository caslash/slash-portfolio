/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/swagger': { page: '/swagger' },
    };
  }
};