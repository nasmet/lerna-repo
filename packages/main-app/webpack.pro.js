/*
 * @Description: webpack生产配置文件
 * @Author: 吴锦辉
 * @Date: 2021-08-11 14:06:33
 * @LastEditTime: 2021-08-12 16:21:05
 */

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:8080/',
  },
  mode: 'production',
  plugins: [new SpeedMeasurePlugin()],
};
