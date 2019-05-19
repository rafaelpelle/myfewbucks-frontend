const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                sourceMap: true,
                cache: true,
            }),
            // UglifyPlugin is broken with React Hooks
            // new UglifyJsPlugin({
            //     sourceMap: true,
            //     cache: true,
            //     parallel: true,
            //     uglifyOptions: {
            //         ecma: 8,
            //         compress: {
            //             warnings: false,
            //             inline: false
            //         }
            //     },
            // }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    plugins: [
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0,
            cache: true,
        }),
    ]
});
