<template>
  <v-hover v-slot:default="{ hover }">
    
    <v-card
      outlined
      class="d-flex flex-column"
      :to="item.router_link"
      :href="item.link"
      :color="hover && (item.router_link || item.link) ? get_highlight() : ''"
      :target="item.link ? '_blank' : ''"
      style="width: 100%"
      :elevation="hover && (item.router_link || item.link) ? '20' : '' "
    >
      <!--<toolBlock v-if="item.tools" :tools="item.tools" />-->
      <!-- :color="hover && (item.router_link || item.link) ? '#1a73e8' : ''" -->
      <v-icon v-if="item.icon" large style="font-size:300%" class="mt-4" >{{ item.icon }}</v-icon>
      <!-- <v-fade-transition v-if="item.graphic" mode="out-in">
      <v-img
        v-on:mouseover="mouseOverCheck = current"
        v-on:mouseout="mouseOverCheck = ''"
        :key="current"
        :src="mouseOverCheck === current ? require('@/assets/img/gif/' + item.graphic + '.gif') : require('@/assets/img/gif/' + item.graphic_frame + '.png')"
        :lazy-src="item.graphic_frame"
        v-on="on"
        class="ma-2"
        max-height="328"
      />
      </v-fade-transition>-->
      <v-img
        v-if="item.graphic"
        :src="require('@/assets/img/gif/' + item.graphic + '.gif')"
        class="ma-2"
        max-height="328"
      />
      <v-img
        v-else-if="item.graphic_frame"
        v-bind:src="require('@/assets/img/gif/' + item.graphic_frame + '.png')"
        class="ma-2"
        max-height="328"
      />
      <!-- :style="hover && (item.router_link || item.link) ? 'color:#1a73e8' : ''" -->
      <v-card-title class="google-font mt-2 title align-bottom justify-center break-word" >
        <!-- :color="hover && (item.router_link || item.link) ? '#1a73e8' : ''" -->
        <v-icon class="mr-2">mdi-{{ item.side_icon }}</v-icon>
        {{ make_readable(item.name) }}
      </v-card-title>
      <v-spacer />
      <v-card-text v-if="item.desc" class="google-font pa-2 body-1">{{ item.desc }}</v-card-text>
      <template v-if="item.bullets">
        <v-card-text class="justify-center">
          <ul
            v-for="bullet in item.bullets"
            :key="bullet"
            class="google-font pa-2 justify-center body-1 "
          >• {{bullet}}</ul>
        </v-card-text>
      </template>
      <v-spacer />
      <div justify="center" v-show="item.shields" class="mt-2">
        <img v-for="shield in item.shields" :key="shield" class="ms-2" :src="shield" />
      </div>
      <v-card-actions class="pa-0">
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
      mouseOverCheck: ""
    };
  },
  props: {
    item: Object
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
        return ""
      } else {
        return ""
      }
    }
  }
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
