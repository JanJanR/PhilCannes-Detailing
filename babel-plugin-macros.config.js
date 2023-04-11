module.exports = {
  'fontawesome-svg-core': {
    license: 'free'
  },
  module: {
    rules: [
      // Other rules...
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/'
            }
          }
        ]
      }
    ]
  }
}
