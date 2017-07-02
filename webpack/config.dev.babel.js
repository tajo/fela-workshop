import webpack from 'webpack';
import path from 'path';
import ip from 'ip';
import { HOT_RELOAD_PORT, SRC_DIR, BUILD_DIR } from './constants';

export default {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      `webpack-hot-middleware/client?path=http://${ip.address()}:${HOT_RELOAD_PORT}/__webpack_hmr`,
      path.join(SRC_DIR, 'client/index.js')
    ]
  },
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
        loader: 'style-loader!css-loader?modules&importLoaders=1'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${ip.address()}:${HOT_RELOAD_PORT}/build/`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
