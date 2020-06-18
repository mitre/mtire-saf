import 'babel-polyfill';
import "intersection-observer";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "./style.css";
import firebase from "@/firebase";
import vueDebounce from 'vue-debounce';
import VueTabulator from "vue-tabulator";
import VueCsvLoader from "vue-csv-loader";
import cssVars from "css-vars-ponyfill";
//import "material-design-icons-iconfont/dist/material-design-icons.css";

cssVars({
  watch: true,
});

IntersectionObserver.prototype.POLL_INTERVAL = 100; // time in ms

Vue.config.productionTip = false;

Vue.use(vueDebounce);

firebase.auth.onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    vuetify,
    VueTabulator,
    VueCsvLoader,
    render: (h) => h(App),
  }).$mount("#app");
});
