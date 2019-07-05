let proxy = require('http-proxy-middleware');
module.exports = function(app) {  
  app.use(proxy('/api/', {
    target: 'http://www.shikepai.com:8082/',
    changeOrigin: true,
    pathRewrite: { 
      '^/api/': '/api/'
    }
  }))
};
