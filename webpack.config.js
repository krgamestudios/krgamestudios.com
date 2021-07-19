const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require('path');

module.exports = env => {
	const prod = env !== 'development' ? true : false;

	return {
		mode: env,
		entry: `./client/index.jsx`,
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: '[name].[fullhash].js',
			publicPath: '/'
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules)/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-react'],
								plugins: ['react-loadable/babel', '@babel/plugin-syntax-dynamic-import']
							}
						}
					]
				},
				{
					test: /\.(css)$/,
					use: [
						MiniCssExtractPlugin.loader, //one CSS file for every js file
						"css-loader",
						{
							loader: 'postcss-loader'
						}
					]
				},
				{
					test: /\.(md)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 9000,
								outputPath: 'content',
								publicPath: '/content',
								name: '[name].[hash].[ext]'
							},
						},
					],
				},
			],
		},
		optimization: {
			minimize: prod,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						output: {
							comments: false,
						},
					},
				})
			]
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: ['*', '!content*', '!img*', '!dl*', '!unity*']
			}),
			new MiniCssExtractPlugin({
				filename: "[name].[hash].css"
			}),
			new HtmlWebpackPlugin({
				template: "./client/template.html",
				minify: {
					collapseWhitespace: true,
					removeComments: true,
					removeAttributeQuotes: true
				}
			}),
			new CompressionWebpackPlugin({
				compressionOptions: {
					level: 9,
				},
				threshold: 1 //size in bytes
			}),
			new BundleAnalyzerPlugin({
				analyzerMode: env === 'analyzer' ? 'server' : 'disabled'
			})
		],
		devServer: {
			contentBase: path.resolve(__dirname, 'public'),
			compress: false,
			port: 8080,
			proxy: {
			},
			overlay: {
				errors: true
			},
			stats: {
				colors: true,
				hash: false,
				version: false,
				timings: false,
				assets: false,
				chunks: false,
				modules: false,
				reasons: false,
				children: false,
				source: false,
				errors: true,
				errorDetails: false,
				warnings: true,
				publicPath: false
			},
			host: '0.0.0.0',
			disableHostCheck: true,
			clientLogLevel: 'silent',
			historyApiFallback: true,
			hot: true,
			injectHot: true
		},
		watchOptions: {
			ignored: /(node_modules)/
		}
	};
};
