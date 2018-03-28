const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
 module: {
        rules: [
        {
            test: /\.scss$/,
            use:[
            {
                loader: "style-loader"
            }, 
            {
                loader: "css-loader"
            }, 
            {
                loader: "sass-loader",
                options: 
                {
                    includePaths: ["absolute/path/a", "absolute/path/b"]
                }
            }]
        }]
    },
  plugins: [
    // aquí van los plugins
    new ExtractTextPlugin("css/[name].css"),
  ]
}
