module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://langen-holiday.dev.marvelconnect.com",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
