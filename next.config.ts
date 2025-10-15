import type { NextConfig } from 'next'
import type { Configuration } from 'webpack'

const nextConfig: NextConfig = {
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEWS_API_BACKEND_URL: process.env.NEWS_API_BACKEND_URL,
    APP_ENV: process.env.APP_ENV
  },
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            exportType: 'named'
          }
        }
      ]
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ]
  }
}

export default nextConfig
