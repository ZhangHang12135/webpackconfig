const webpack = require('./webpack');

const config = require('../example/webpack.config');

// 步骤1 初始化参数

const compiler = webpack(config);

// 调用run方法进行打包
compiler.run((err, stats) => {
    if (err) {
      console.log(err, 'err');
    }
    // ...
  });