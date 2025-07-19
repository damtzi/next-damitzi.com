import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        viewTransition: true
    },
    images: {
        remotePatterns: [new URL('https://i.discogs.com/**')],
    }
};

export default nextConfig;
