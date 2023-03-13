const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].[contenthash:8].js',
        clean: true,
    },
    module: {
        rules: [{
            test: /\.js$/i,
            // use: ['a-loader', 'sync-loader', 'raw-loader', 'pitching-loader'],
            use: ['clean-log-loader']
        },
        {
            test: /\.png$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'newtext',
                        output: 'public'
                    }
                }
        ]
        }
    ],
    },
    resolveLoader: {
        modules: [
            'node_modules',
            'loaders'
        ]
    }
}