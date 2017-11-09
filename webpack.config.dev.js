import webpack from 'webpack';
import path from 'path';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'eventsource-polyfill', //necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],

  target: 'web',

  //webpack isn't going to generate any physical files
  //instead it will create bundles in memory that it will serve to the browser
  //we define a path and anme so that it can simulate the physical file's existence
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hotOnly: true,
    noInfo: false
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],

  module: {
    rules: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            context: path.resolve(__dirname, './src'),
            limit: 10000,
            name: '[path][name].[ext]',
          }
        },
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            context: path.resolve(__dirname, './src'),
            limit: 10000,
            name: '[path][name].[ext]',
          }
        },
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              context: path.resolve(__dirname, './src'),
              limit: 10000,
              name: '[path][name].[ext]',
            },
          },
        ]
      },
      {
        test: /bootstrap.+\.(jsx|js)$/,
        use: 'imports-loader?jQuery=jquery,$=jquery,this=>window',
      }
    ]
  }
};
