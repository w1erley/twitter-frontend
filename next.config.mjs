/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
    // Specify the root directory for the source code
    // This tells Next.js to look for pages, components, etc. inside the src directory
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    env: {
        EXTERNAL_API_URL: process.env.EXTERNAL_API_URL,
        APP_BASE_URL: process.env.APP_BASE_URL,
    },
    images: {
        domains: [
            process.env.EXTERNAL_API_DOMAIN,
            process.env.APP_BASE_URL,
        ],
    },
  };
export default nextConfig;

