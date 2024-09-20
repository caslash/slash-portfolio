/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /node_modules\/swagger-jsdoc\/src\/utils\.js/ },
      { file: /node_modules\/swagger-jsdoc\/src\/index\.js/ },
    ];

    return config;
  },
};

export default nextConfig;
