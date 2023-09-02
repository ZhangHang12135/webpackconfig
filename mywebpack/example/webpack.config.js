const path = require('path');
const PluginA = require('../plugins/plugina');
const PluginB = require('../plugins/pluginb');
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/entry1.js'),
        two: path.resolve(__dirname, './src/entry2.js'),
    },
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /.js/,
                use: [path.resolve(__dirname, '../loader/loaderA.js')]
            }
        ]
    },
    plugins: [
        new PluginA(),
        new PluginB()
    ]
}