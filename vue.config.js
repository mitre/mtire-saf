module.exports = {
  chainWebpack: config => {
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
  transpileDependencies: ["vuetify", "register-service-worker"],
  //  publicPath: process.env.NODE_ENV === 'production'
  //    ? '/mitre-saf/'
  //    : '/'
};
