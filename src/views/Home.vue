<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10">
        <homeStartScreen />
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="mx-0">
      <v-col
        cols="12"
        lg="10"
        class="py-0"
        :class="this.$vuetify.theme.dark == true ? 'darkModeContainer' : 'lightModeContainer'"
      >
        <whatwedo :whatwedodata="wwd" />
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="py-0">
        <partners />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import homeStartScreen from "../components/home/homeScreen";
import whatwedo from "../components/home/whatwedo";
import whatwedodata from "@/assets/data/whatWeDo.json";
import partners from "../components/common/partners";

export default {
  data: () => ({
    wwd: whatwedodata.whatWeDo,
  }),
  components: {
    homeStartScreen,
    whatwedo,
    partners
  },
  computed: {
    showTraining() {
      return this.$store.state.showFutureTraining;
    }
  },
  created() {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (this.$vuetify.theme.dark) {
      metaThemeColor.setAttribute("content", "#212121");
    } else {
      metaThemeColor.setAttribute("content", "#0277bd");
    }
  }
};
</script>

<style scoped>
</style>


