import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: ["@/assets/variables.scss"],
  treeShake: true,
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: "#1a73e8",
        background: "#000000",
      },
      light: {
        
        primary: "#1a73e8",
        background: "#d0f0c0",
      },
    },
  },
});
