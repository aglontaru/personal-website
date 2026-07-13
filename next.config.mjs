/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Static export requires unoptimized images if using next/image without a custom loader
  },
};

export default nextConfig;
