module.exports = {
  baseUrl: './',

  devServer: {
    proxy: {
        '/api': {
            target: 'http://192.168.0.88:8080',   // 需要请求的地址
            changeOrigin: false,  // 是否跨域
            pathRewrite: {
                '^/api': '/'  // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
            }
        }

    },  // 配置多个代理
  }
};
