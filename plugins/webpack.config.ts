// import APlugin from './myplugin/Aplugin';
// import BannerWebpackPlugin from './myplugin/copy.js';
// import Bplugin from './myplugin/Bplugin';
import BannerWebpackPlugin from './myplugin/BannerWebpackPlugin';
import TerserPlugin from 'terser-webpack-plugin';
module.exports = {
    mode: 'production',
    entry: './index.ts',
    output: {
        clean: true,
        filename: '[name].[fullhash:8].js',
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        // 保留所有注释
                        comments: 'all'
                    },
                },
                // 禁用注释剥离能力
                //  extractComments: false,
            })
        ],
    },
    plugins: [ new BannerWebpackPlugin({name: 'hahah '})],
}