const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    entry: './src/index.ts',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
 };
