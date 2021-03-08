import Vue from "vue";
import Vuex from "vuex";
import controlTable from "./modules/controlTable.module";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    showFutureTraining: false,
    isCompact: true,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: false,
        },
      },
      {
        text: "Get Started",
        to: "/getstarted",
        icon: "mdi-book-open",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: false,
        },
      },
      {
        text: "Harden",
        to: "/harden",
        icon: "mdi-security",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true,
        },
      },
      {
        text: "Visualize",
        to: "/visualize",
        icon: "mdi-image-search",
        meta: {
          showToolbar: true,
          enabled: false,
          showBottomNav: true,
        },
      },
      {
        text: "Validate",
        to: "/validate",
        icon: "mdi-thumb-up",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true,
        },
      },
      {
        text: "Normalize",
        to: "/normalize",
        icon: "mdi-format-vertical-align-center",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true,
        },
      },
      {
        text: "Train [InSpec Training in March!]",
        to: "/train",
        icon: "mdi-chair-school",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true,
        }
      },
      {
        text: "FAQ",
        to: "/faq",
        icon: "mdi-frequently-asked-questions",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true,
        }
      }
    ],
    adminDrawer: true,
    adminLinks: [
      {
        text: "Home",
        to: "/admin/dashboard/home",
        icon: "mdi-home",
        meta: {
          showToolbar: false,
          showBottomNav: true,
        },
      },
      {
        text: "Events",
        to: "/admin/dashboard/events",
        icon: "mdi-assistant",
        meta: {
          showToolbar: false,
          showBottomNav: true,
        },
      },
      {
        text: "Team",
        to: "/admin/dashboard/team",
        icon: "mdi-account-group",
        meta: {
          showToolbar: false,
          showBottomNav: true,
        },
      },
      {
        text: "Speaker",
        to: "/admin/dashboard/speaker",
        icon: "mdi-account-switch",
        meta: {
          showToolbar: false,
          showBottomNav: true,
        },
      },
    ],
  },
  getters: {
    links: (state) => {
      return state.items;
    },
    AdminLinks: (state) => {
      return state.adminLinks;
    },
    isCompactGetter: (state) => {
      return state.isCompact;
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
    toggleCompact: (state) => (state.isCompact = !state.isCompact),

    // For Admin
    ADsetDrawer: (state, payload) => (state.adminDrawer = payload),
    ADtoggleDrawer: (state) => (state.adminDrawer = !state.adminDrawer),
  },
  actions: {},
  modules: {
    controlTable,
  },
});
