const HtmlWebPackPlugin = require("html-webpack-plugin");
const  webpack = require('webpack');

module.exports = {
  mode: 'development',
  resolve: {
      extensions: ['.js', '.jsx'] 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    inline: true,
    publicPath: '/',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8000
  }
};
