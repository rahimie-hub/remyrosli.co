const proxy = require('http-proxy-middleware');
const morgan = require("morgan");

module.exports = function (app) {
  app.use(morgan('dev'));

  // app.use(
  //   '/resume',
  //   proxy({
  //     target: 'http://localhost:4545/api/v1',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/resume': '/resume'
  //     }
  //   }),
  // );
};

