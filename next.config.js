/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        unoptimized: true,
        remotePatterns: [],
        domains: [],
    },
}

module.exports = nextConfig 