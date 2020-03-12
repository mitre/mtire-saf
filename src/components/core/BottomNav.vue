<template>
  <v-bottom-navigation app
    :value="activeBtn"
    grow
    :dark="this.$vuetify.theme.dark"
    :background-color="this.$vuetify.theme.dark?'#212121':'white'"
    :color="this.$vuetify.theme.dark?'white':'primary'"
    class="ps-2"
  >
  <div v-for="(link, i) in links"
      :key="i" class="ma-0">
    <v-btn
      :to="link.to"
      small
      v-if="link.meta.showBottomNav && link.meta.enabled"
      class="mt-2 ps-0 google-font"
      style="text-transform: capitalize; "
      text
      @click="onClick($event, link)"
    >
      <span>{{ link.text }}</span>
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </div>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeBtn: "/home"
    };
  },
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>

<style scoped>
.v-size--small {
  min-width: 50px !important;
}
</style>