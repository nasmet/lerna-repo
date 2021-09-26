/*
 * @Description: webpack配置文件
 * @Author: 吴锦辉
 * @Date: 2021-07-20 13:55:02
 * @LastEditTime: 2021-09-26 15:47:38
 */

const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    /** 微应用配置 */
    library: {
      name: 'wjh-request',
      type: 'umd',
    },
    filename: 'index.js',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    mainFiles: ['index.jsx', 'index.js'],
    alias: {},
  },
  externals: {
    axios: {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'Axios', // 指向全局变量
    },
  },
};
