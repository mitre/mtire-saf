<template>
  <v-app-bar app>
    <v-app-bar-nav-icon class="d-md-none d-lg-none" @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="pl-2">
      <router-link
        :to="{ name: 'home'}"
        class="google-font"
        style="text-decoration:none; font-size:1.4rem"
        :class="this.$vuetify.theme.dark ? 'whiteText' : 'blackText'"
      >
        {{communityData.communityName}}
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      v-for="(link, i) in metalinks"
      :key="i"
      :to="link.to"
      class="ml-2 google-font hidden-sm-and-down"
      style="text-transform: capitalize;"
      text
      @click="onClick($event, link)"
    >
      {{ link.text }}
    </v-btn>

    <v-btn icon v-on:click="darkMode" class="ml-2">
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      communityData: communityData,
    };
  },
  computed: {
    metalinks() {
      return this.$store.getters.links.filter(link => link.meta.enabled);
    }
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),

    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },

    darkMode() {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (localStorage)
        localStorage.setItem("darkMode", this.$vuetify.theme.dark);
      if (this.$vuetify.theme.dark) {
        metaThemeColor.setAttribute("content", "#212121");
      } else {
        metaThemeColor.setAttribute("content", "#0277bd");
      }
    }
  }
};
</script>

<style scoped>
.whiteText {
  color: white;
}
.blackText {
  color: rgba(0, 0, 0, 0.87);
}
</style>
