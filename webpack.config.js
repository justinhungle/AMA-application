const dev = process.env.NODE_ENV !== 'production' // Loads the environment that you're running on
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  mode:'development',
  devtool: dev ? 'inline-source-map': 'eval-source-map', // Maps the line numbers of jsx files to the ones in the bundle
  entry: path.join( __dirname, 'client/src/index.js'),
  module: { // All modules to be used in the app
    rules: [
      {
        test: [/\.(js|jsx)$/], // Regex for parsing both js and jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'] // For class based react components
          }
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, // Regex for parsing all the font types
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/, // Regex for parsing css and sass files
        use: ['css-loader', 'sass-loader']
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist/')
  },
  plugins:[
    new HtmlWebpackPlugin({ // Creates the required html file on every build
    title: 'React Webpack Boilerplate',
    inject: 'body',
    template: path.join(__dirname, 'client/src/template.html'), // Include your app's target node here.
    filename: 'index.html', // output file
  }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }) // Cleans up all unwanted bundles
  ]
};