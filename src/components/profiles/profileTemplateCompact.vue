<template>
  <v-content class="pa-0">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="auto" v-for="cat in categoryOrder" :key="cat" outlined class="ma-2">
          <v-card class="ma-0 pa-0">
            <h2
              class="font-weight-bold break-word justify-center text-center google-font ma-2"
              :class="{'subtitle-2': $vuetify.breakpoint.mdAndDown}"
            >{{ cat }}</h2>

            <v-card
              v-for="(entry, i) in getByCategory(profiles, [cat])"
              :key="entry.category + entry.longName + i"
              :href="entry.link"
              target="_blank"
              class="google-font break-word text-none ma-2"
              label
              outlined
            >
              <v-list class="">
                <v-list-item class="ma-0 pa-0">
                  <v-list-item-action class="ma-0 pa-0">
                    <v-img
                      v-show="entry.svg"
                      :src="require('@/assets/img/svg/' + entry.svg + '.svg')"
                      svg-inline
                      style="max-width: 14px; max-height: 14px;"
                      class="mr-2"
                      contain
                    />
                  </v-list-item-action>
                  <v-list-item-title class="ma-0 pa-0" style="font-size:80%">{{ entry.shortName }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: {
    profiles: Array,
    categoryOrder: Array
  },
  data() {
    return {
      fab: false
    };
  },

  methods: {
    make_linkable(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 200;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    getByCategory(profiles, category) {
      var filteredProfiles = [];
      var i;
      var j;
      for (i = 0; i < profiles.length; i++) {
        for (j = 0; j < profiles[i].category.length; j++) {
          if (profiles[i].category[j] == category) {
            filteredProfiles.push(profiles[i]);
          }
        }
      }
      return filteredProfiles.sort(function(a, b) {
        if (a["shortName"] > b["shortName"]) {
          return 1;
        } else if (a["shortName"] < b["shortName"]) {
          return -1;
        }
        return 0;
      });
    }
  },
  computed: {
    moveForBottomNavStyle() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "z-index: 10; bottom: 60px";
      } else {
        return "";
      }
    }
    // function no longer useable since there is a defined category ordr
    // assume that all profiles fall in defined categories in the categoryOrder var,
    // but any additional categories must be directly added to the order or they will not appear
    // categorized() {
    //   var categories = new Set();
    //   var i;
    //   var j;
    //   for (i = 0; i < this.profiles.length; i++) {
    //     for (j = 0; j < this.profiles[i].category.length; j++) {
    //       categories.add(this.profiles[i].category[j]);
    //     }
    //   }
    //   return Array.from(categories);
    // }
  }
};
</script>

<style scoped>
.div {
  max-width: 1000px;
}
.v-chip__content {
  white-space: nowrap;
}
</style>