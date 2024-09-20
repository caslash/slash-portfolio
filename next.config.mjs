/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  transpilePackages: ["swagger-client", "swagger-ui-react"],
};

export default nextConfig;
