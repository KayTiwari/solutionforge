/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
