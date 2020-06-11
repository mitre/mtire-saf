<template>
  <v-container fluid>
    <template v-for="item in resources.items">
      <div :key="item.name" class="ms-2">
        <p class="google-font mb-2 wrap-list-text">
          <b>{{item.name}}</b>
        </p>
        <p flat class="google-font ma-2">{{item.desc}}</p>
        <p flat dense class="ma-2 google-font" v-for="entry in item.values" :key="entry.name">
          <span>
            <a v-if="entry.link" :href="entry.link" target="_blank">{{entry.name}}</a>
            <a
              v-if="entry.download_link"
              :href="entry.download_link"
              target="_blank"
              download
            >{{entry.name}}</a>
            <!-- <span v-show="entry.desc"> -- {{entry.desc}}</span> -->
          </span>
        </p>
      </div>
    </template>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
export default {
  name: "App",
  data: () => ({
    communityData: communityData,
    trainingData: trainingData,
    resources: resources,
    dialog: false,
    dialogData: {
      name: "",
      date: "",
      link: ""
    }
  }),
  computed: {
    color_mode() {
      if (this.$vuetify.theme.dark) return "darkModeContainer";
      return "lightModeContainer";
    },
    moveForBottomNavStyle() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "z-index: 10; bottom: 60px";
      } else {
        return "";
      }
    }
  },
  methods: {
    make_linkable(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
    passItemData(item) {
      this.dialogData = item;
    }
  }
};
</script>

<style scoped>
.wrap-list-text {
  -webkit-line-clamp: unset !important;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  hyphens: none;
  font-size: 150%;
  color: #1a73e8;
}
</style>