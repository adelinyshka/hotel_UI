const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");


module.exports = {
	plugins: [new DuplicatePackageCheckerPlugin()]
};

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	plugins: [
		new BundleAnalyzerPlugin()
	]
};

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
};

module.exports = {
    // BASE config
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: PATHS.assets + 'fonts',
                    }
                },
                exclude: PATHS.src+'/img/'
            },
	        {
		        test: /\.pug$/,
		        use: [ {
			        loader: 'html-loader',
			        options: {
				        attrs: ['img:src', 'link:href'] } },
			        {
				        loader: 'pug-html-loader',
				        options: {
					        pretty: true,
					        globals: ['require'] }}]},
	        {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: PATHS.assets + '/img'
                },
                exclude: PATHS.src+'/fonts/'
            }, {
		        test: /\.html$/,
		        loader: 'file-loader',
		        options: {
			        name: '[name].[ext]',
			        outputPath: '/',
		        }},
	        {
                test:  /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true}
                }
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                    }
                ]
            }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.pug`,
            filename: './index.html'
        }),
	    new HtmlWebpackPlugin({
		    hash: false,
		    template: `${PATHS.src}/colors-and-types.pug`,
		    filename: './colors-and-types.html'
	    }),
	    new HtmlWebpackPlugin({
		    hash: false,
		    template: `${PATHS.src}/form-elements.pug`,
		    filename: './form-elements.html'
	    }),
        new CopyWebpackPlugin([
            { from: PATHS.src + '/static' },
        ])
    ],
};
