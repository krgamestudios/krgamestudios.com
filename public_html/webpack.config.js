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
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
