module.exports = {
  '/rd-route-datav-pro': {
    changeOrigin: true,
    target: 'http://debug.epayservice.cn/rd-route-datav-pro/',
    pathRewrite: {
      '^/rd-route-datav-pro': '',
    },
  },
};
