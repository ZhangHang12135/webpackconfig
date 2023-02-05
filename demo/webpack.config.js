const path = require('path');

module.exports = {
    mode: 'development',
    entry: './script/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
}