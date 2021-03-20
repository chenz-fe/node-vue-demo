const port = 7070;
const title = "vue+node demo";

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const bodyParser = require("body-parser");

module.exports = {
  publicPath: '/auto-test', // 部署应用包时的基本 URL
  devServer: {
    port: port,
    proxy: {
      // 代理 /dev-api/case/list 到 http://127.0.0.1:3000/case/list
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:3000/`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    },
  },
};