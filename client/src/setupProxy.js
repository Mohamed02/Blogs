// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log('creating proxy *****');
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/auth': '/auth', // Rewrite path '/auth' to '/'
      },
    })
  );
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api', // Rewrite path '/auth' to '/'
    },
  }));
};
