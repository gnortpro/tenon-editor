/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }],
    })
    return config
  },
}

module.exports = nextConfig
