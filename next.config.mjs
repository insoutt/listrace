/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'localhost' },
      { hostname: 'zenith.elvisfernando.com' }

    ]
  }
};

export default nextConfig;
