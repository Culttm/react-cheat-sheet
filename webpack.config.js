module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "browser-bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel"
      }
    ]
  }
}
