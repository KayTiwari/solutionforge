/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
