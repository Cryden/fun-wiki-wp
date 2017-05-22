var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =  {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: "/public/",
    publicPath: "/public/",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue:{
		loaders:{
			css: ExtractTextPlugin.extract('css')
		}
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		alias: {
		'vue$': 'vue/dist/vue.common.js'
		},
		modulesDirectories: ['node_modules']
	},
	plugins: [
		new ExtractTextPlugin("../css/components.css"),
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
     	}
    })
	]
}