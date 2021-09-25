/*
 * @Description: webpack开发配置文件
 * @Author: 吴锦辉
 * @Date: 2021-08-16 09:29:43
 * @LastEditTime: 2021-09-25 14:55:01
 */

/** 微应用devServer需要的配置 */
const mircroDevServerConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  hot: false,
  watchContentBase: false,
  liveReload: false,
  injectClient: false,
  historyApiFallback: true,
};

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
      },
    },
    ...mircroDevServerConfig,
  },
};
