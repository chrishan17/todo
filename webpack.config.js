const path = require('path')

module.exports = {
  entry: './app.js',
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        },
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  }
};
