const path = require('path'); 
const webpack = require('webpack'); 
const config = {
  entry: path.join(__dirname, '/client/index.js'), 
  output: { 
    path: path.join(__dirname, './public/'), 
    filename: 'bundle.js' 
  },
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader' 
      },
      { 
        test: /(\.css|\.scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins:[
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
]
};

module.exports = config;