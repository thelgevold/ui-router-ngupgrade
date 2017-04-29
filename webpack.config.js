const ngToolsWebpack = require('@ngtools/webpack');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './src/bootstrap.ts',
  output: {
    filename: 'dist/build.js'
  },
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig.json'
    }),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	output: {
		// 		comments: false
		// 	},
		// 	sourceMap: true
		// })
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};