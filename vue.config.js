module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://langen-holiday.dev.marvelconnect.com",
        ws: true,
        changeOrigin: true,
      },
      "^/uat": {
        target: "https://langen-holiday.uat.marvelconnect.com",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/pdf/[name].[hash:8].[ext]",
      });
  },
};
