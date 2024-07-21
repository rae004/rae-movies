/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '**',
      },
    ],
  },
  // todo refactor suspense for production deployment
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // this project uses biome to lint and format the code
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
