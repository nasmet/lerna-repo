/*
 * @Description: webpack配置文件
 * @Author: 吴锦辉
 * @Date: 2021-08-11 14:05:12
 * @LastEditTime: 2021-08-12 14:09:22
 */

const path = require('path');
const { argv } = require('yargs');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./webpack.dev.js');
const proConfig = require('./webpack.pro.js');

const { env } = argv;
process.env.NODE_ENV = env;

const baseConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
    },
    mainFiles: ['index.jsx', 'index.js'],
  },
};

let buildConfig;

switch (env) {
  case 'production':
    buildConfig = proConfig;

    break;
  case 'development':
    buildConfig = devConfig;

    break;
  default:
    throw new Error('不存在该环境的运行');
}

module.exports = merge(baseConfig, buildConfig);
