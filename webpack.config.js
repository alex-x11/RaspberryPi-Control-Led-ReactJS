var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');


module.exports = {
	entry: [
		'./src/index.js'
	],
	output: { 
		path: path.join(__dirname, 'dist'), 
		publicPath: '/dist', // Where your server will look up
		filename: 'bundle.js' 
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},   {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({fallback: 'style-loader', use:['css-loader?url=false', 'postcss-loader?url=false', 'sass-loader?url=false']})

			},{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({fallback: 'style-loader', use:['css-loader', 'postcss-loader', 'sass-loader']})

			},  {
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			},{
				test: /\.(jpg|png)$/,
				loaders: 'url-loader'
			},
			{ test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
		]
	},
	plugins: [
		new ExtractTextPlugin('css/style.css')
	]
};