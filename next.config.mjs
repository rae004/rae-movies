/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**',
            }
        ]
    },
    // todo refactor suspense for production deployment
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
