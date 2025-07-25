import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
    pageExtensions: ['mdx', 'tsx', 'ts'],
    experimental: {
        viewTransition: true,
        mdxRs: true
    },
    images: {
        remotePatterns: [new URL('https://i.discogs.com/**')],
    }
};

const withMDX = createMDX({})

export default withMDX(nextConfig);
