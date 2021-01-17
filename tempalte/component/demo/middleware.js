const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use('/api/', createProxyMiddleware({
    target: 'http://10.120.47.41:8107/', // 2.3 rd
    // target: 'http://10.10.107.111:8107',
    changeOrigin: true,
  }));
};
