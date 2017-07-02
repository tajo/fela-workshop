import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { SRC_DIR, BUILD_DIR } from './constants';

export default {
  cache: false,
  devtool: false,
  entry: { app: [path.join(SRC_DIR, 'client/index.js')] },
  module: {
    rules: [
      {
        loader: 'url-loader?limit=10000',
        test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg|wav)$/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['es2015', { modules: false }], 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1'
        })
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/build/',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new ExtractTextPlugin('app-[hash].css'),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
};
