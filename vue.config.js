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
};
