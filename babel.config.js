module.exports = {
  presets: [
    ["@babel/preset-env"],
    ["@vue/app", { useBuiltIns: "entry"}]
  ],
  plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],
};
