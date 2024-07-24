/** @type {import('next').NextConfig} */

module.export = {
  webpack(config, { isServer }) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      https: require.resolve('https-browserify'),
      reactStrictMode: true
    };

    return config;
  }
}
