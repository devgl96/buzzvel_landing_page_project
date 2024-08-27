/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'buzzvel.com',
      },
    ],
  },
};

export default nextConfig;
