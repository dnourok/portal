const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: "development",
  entry: {
    server: './server/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    __dirname: false,   
    __filename: false,  
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      }
    ]
  }
}