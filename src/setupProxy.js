const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:3000", // 目标路径
      changeOrigin: true,
    })
  )
}