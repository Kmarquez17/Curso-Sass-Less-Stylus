const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
    indexGuide: path.resolve(__dirname, 'src/js/indexGuide.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        }),
      }
    ]
  },
  plugins: [
    // aquí van los plugins
    new ExtractTextPlugin("css/[name].css"),
  ]
}
