/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/hiagoisoppo/**',
      },
      {
        protocol: 'https',
        hostname: 'api.accredible.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;

