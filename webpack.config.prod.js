import webpack from 'webpack';
import path from 'path';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
}

var HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  //debug: true,
  devtool: 'source-map',
  //noInfo: false,
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   favicon: 'src/favicon.ico'}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('public/styles.css'),
    new webpack.optimize.UglifyJsPlugin()
    //new ExtractTextPlugin({filename: 'public/style.css', allChunks: true})
  ],
  node: {
    fs: 'empty',
    dns: 'empty',
    tls: 'empty',
    net: 'empty',
    child_process: 'empty'
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      //{ test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  }
};
