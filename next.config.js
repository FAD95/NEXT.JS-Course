const withCSS = require('@zeit/next-css')
const withSCSS = require('@zeit/next-sass')

module.exports = withSCSS({
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.css$/,
      // use: ['style-loader', 'css-loader'],
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]'
      }
    })

    return config
  }
})
