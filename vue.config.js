module.exports={
  publicPath:'./',
  lintOnSave:false,
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://127.0.0.1:7002',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },

  }
}