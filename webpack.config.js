/* webpack.config.js */
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  context: path.resolve('./browser'),
  output: {
    filename:'bundle-[hash].js',
    path: path.resolve('./public/dist'),
    publicPath: '/dist'
  },
  plugins: [
    /**
    * @required
    * Configure extract text plugin to create stylesheet file
    **/
    new ExtractTextPlugin('my-stylesheet.css'),
    new HTMLPlugin({
      template: path.resolve('./browser/index.html'),
      filname: 'index.html'
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.cssm',
      'jsx'
    ]
  },
  module: {
    rules: [
      /**
       * @required
       **/
      {
        /* @property issuer Must be specified when using the ExtractTextPlugin  */
        issuer: /\.jsx?$/,
        test: /\.s?cssm?$/,
        /**
         * Tell ExtractTextPlugin to extract css contents from Union css modules
         */
        use: ExtractTextPlugin.extract({
          /* ExtractTextPlugin always needs a `use` option :/ */
          use: []
        })
      },
      /**
       * @optional
       *
       * Configure this if you prefer to write JSX when using React.
       */
      {
        test: /\.jsx?$/,
        /* Configure babel in .babelrc file  */
        use: 'babel-loader'
      },
      /**
       * @optional
       *
       * Use this rule if you want to create css-modules.
       */
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'a-css-loader',
            options: {
              mode: 'local'
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};