import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Disable experimental tracing to avoid Windows permission issues
  experimental: {
    webVitalsAttribution: [],
  },
}

export default nextConfig
