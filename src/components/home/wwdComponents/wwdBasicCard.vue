<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      outlined
      class="pa-2"
      :to="item.router_link"
      :href="item.link"
      :color="hover && (item.router_link || item.link) ? get_highlight() : ''"
      :target="item.link ? '_blank' : ''"
      style="height: 100%"
      :elevation="hover && (item.router_link || item.link) ? '20' : ''"
    >
      <v-sheet height="100" v-if="item.icon || item.png">
        <v-icon v-if="item.icon" large style="font-size:600%" class="mt-2">{{
          item.icon
        }}</v-icon>
        <v-img
          v-else-if="item.png_dark && $vuetify.theme.isDark"
          v-bind:src="require('@/assets/img/tools/' + item.png_dark + '.png')"
          style="vertical-align: middle"
          class="ma-2 mx-auto"
          :height="item.img_height ? item.img_height : '100'"
          :width="item.img_width ? item.img_width : '100'"
        />
        <v-img
          v-else-if="item.png"
          v-bind:src="require('@/assets/img/tools/' + item.png + '.png')"
          class="ma-2 mx-auto"
          :height="item.img_height ? item.img_height : '100'"
          :width="item.img_width ? item.img_width : '100'"
        />
      </v-sheet>
      <!-- :style="hover && (item.router_link || item.link) ? 'color:#1a73e8' : ''" -->
      <v-card-title
        class="google-font mt-2 title align-bottom justify-center break-word"
        :style="item.font_size ? 'font-size:' + item.font_size + '% !important' : ''"
      >
        <!-- :color="hover && (item.router_link || item.link) ? '#1a73e8' : ''" -->
        <v-icon v-if="item.side_icon" class="mr-2">mdi-{{ item.side_icon }}</v-icon>
        <span v-html="make_readable(item.name)" />
      </v-card-title>
      <v-spacer />
      <v-card-text v-if="item.desc" class="google-font pa-2 body-1"
        ><span v-html="item.desc"
      /></v-card-text>
      <template v-if="item.bullets">
        <v-card-text class="text-left">
          <ul>
            <li
              v-for="bullet in item.bullets"
              :key="bullet"
              class="google-font body-1 "
            >
              {{ bullet }}
            </li>
          </ul>
        </v-card-text>
      </template>
      <v-spacer />
      <div justify="center" v-show="item.shields" class="mt-2">
        <img
          v-for="shield in item.shields"
          :key="shield"
          class="ms-2"
          :src="shield"
        />
      </div>
      <v-card-actions
        v-if="item.app_link || item.doc_link || item.github_link"
        class="mt-4"
      >
        <v-container row dense>
          <v-row justify="center">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  v-if="item.app_link"
                  :href="item.app_link"
                  target="_blank"
                  text
                  v-on="on"
                >
                  <v-icon>mdi-desktop-classic</v-icon>
                </v-btn>
              </template>
              <span>Demo</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  v-if="item.doc_link"
                  :href="item.doc_link"
                  target="_blank"
                  text
                  v-on="on"
                >
                  <v-icon>mdi-file-document</v-icon>
                </v-btn>
              </template>
              <span>Documentation</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  v-if="item.github_link"
                  :href="item.github_link"
                  target="_blank"
                  text
                  v-on="on"
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </template>
              <span>GitHub</span>
            </v-tooltip>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
  // see https://stackoverflow.com/questions/58556447/is-there-a-card-footer-card-deck-feature-on-vuetify
  // for details on arranging card components

  //import toolBlock from "@/components/home/wwdComponents/toolBlock.vue";
  export default {
    data() {
      return {
        mouseOverCheck: "",
      };
    },
    props: {
      item: Object,
    },
    components: {
      //toolBlock
    },
    methods: {
      make_readable(str) {
        return str.replace(/_/, " ");
      },
      get_highlight() {
        if (this.$vuetify.theme.dark) {
          return "";
        } else {
          return "";
        }
      },
    },
  };
</script>

<style scoped>
  .card-outer {
    position: relative;
    padding-bottom: 10px;
  }

  .card-actions {
    position: absolute;
    bottom: 0;
  }

  .flexcard {
    display: flex;
    flex-direction: column;
  }

  .svg-style {
    max-width: 24px;
    max-height: 24px;
  }
</style>
