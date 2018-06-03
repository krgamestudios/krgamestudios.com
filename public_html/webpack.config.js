module.exports = {
  entry: './src/index_dev.jsx',
  output: {
    path: __dirname,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-3']
          }
        }
      }
    ]
  }
};
