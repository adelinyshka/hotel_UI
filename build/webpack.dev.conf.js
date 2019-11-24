const webpack =  require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const devWebpackConfig = merge(baseWebpackConfig, {
	// DEV config
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: baseWebpackConfig.externals.paths.dist,
		port: 8099,
		overlay:
{
			warnings: true,
			errors: true
		}
	},
});

module.exports = new Promise((resolve) => {
	resolve(devWebpackConfig)
});