module.exports = {
  chainWebpack: config => {
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
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      progressiveImages: true
    }]);
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
  transpileDependencies: ["vuetify", "dashify", "vue-papa-parse", "vue-tabulator", "register-service-worker"],
  //  publicPath: process.env.NODE_ENV === 'production'
  //    ? '/mitre-saf/'
  //    : '/'
};
