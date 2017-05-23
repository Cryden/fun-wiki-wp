const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './source/js/main.js',
	output: {
		path: "/public/",
		publicPath: "/public/",
		filename: "app.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader:"babel-loader",
					options: {
						presets: ['es2015'],
						plugins: ['transform-runtime']
					}
				}]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		},
		modules: ['node_modules']
	},
	devtool: "source-map",
	plugins: [
		new ExtractTextPlugin({
			filename: "../css/components.css",
			disable: false,
			allChunks: true
		}),
		new UglifyJSPlugin({
			compress: {
				warnings: false
			},
			comments: false
		})
	]
}
