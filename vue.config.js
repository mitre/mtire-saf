module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("csv")
      .test(/\.csv$/)
      .use("csv-loader")
      .loader("csv-loader")
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      })
      .end();
  },
  pwa: {
    name: "MITRE SAF",
    workboxPluginMode: "InjectManifest",
    themeColor: "#4A90E2",
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js",
    },
  },
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  //  publicPath: process.env.NODE_ENV === 'production'
  //    ? '/mitre-saf/'
  //    : '/'
};
