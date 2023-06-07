// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production';
const CopyWebpack = require('copy-webpack-plugin')

const stylesHandler = MiniCssExtractPlugin.loader;

const pages = ['home','destination','crew','technology']
const config = {
	entry:pages.reduce((config, page) => {
		config[page] = `./src/${page}.js`;
		return config;
	},{}),

    output: {
        path: path.resolve(__dirname, 'dist'),
		filename: '[name]/bundle.js',
		clean:true,
    },

	optimization: {
		splitChunks: {
			chunks: "all",
		},
		minimize: true,

	},

    plugins: [].concat(
		pages.map(
			(page) =>{
				return new HtmlWebpackPlugin({
					inject: true,
					template: `./public/${page}.html`,
					filename: `${page}/index.html`,
					chunks: [page],
					cache:true,
				})
			}
		),
		pages.map(
			(page) =>{
				return new CopyWebpack({
					patterns:[
					{
						from: `public/assets/${page}`,
						to: `${page=='index'? '' : page}/assets/`
					}
				]})
			}
		),
		new MiniCssExtractPlugin({
			filename: `[name]/index.css`
		})
	),

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
				exclude: '/node_modules',
			},
            {
                test: /\.s[ac]ss$/i,
                use: [
						stylesHandler,
						{loader:'css-loader'},
						{loader: 'postcss-loader'},
						{loader: 'sass-loader'} 
					],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
				generator:{
					filename: '[name][ext]'
				}
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
