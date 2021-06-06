<template>
  <v-container class style="width:100%">
    <v-row align="center" justify="center" class="my-4">
      <p class="primary--text ma-0" style="font-size:300%">How MITRE SAF Works</p>
    </v-row>
    <v-row justify="center" v-for="(row, n) in data" :key="n">
      <v-col cols="1" v-if="$vuetify.breakpoint.smAndUp">
        <v-card
          flat
          class="primary--text"
          color="rgba(0, 0, 0, 0.0)"
          height="100%"
        >
          <b>
            <p class="rotate inner" style="font-size:2rem">{{row.name}}</p>
          </b>
        </v-card>
      </v-col>
      <v-col xs="12" smAndUp="11">
        <v-container fluid>
          <v-row justify="center">
            <p v-if="$vuetify.breakpoint.xs" class="primary--text" style="font-size:2rem">{{row.name}}</p>
            <v-col v-for="(item, index) in row.data" class="pa-1" :key="index" :xl="item.cols.xl" :lg="item.cols.lg" :md="item.cols.md" :sm="item.cols.sm" :cols="item.cols.xs">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :class="hover && (item.link || item.router_link) ? getHighlight() : ''"
                  flat
                  outlined
                  height="100%"
                  :href="item.link"
                  :to="item.router_link"
                  :target="item.link ? '_blank' : ''"
                  :min-height="item.min_height"
                >
                <div v-if="item.svg && $vuetify.breakpoint.mdAndDown" style="text-align:center" class="ma-2">
                  <img
                    
                    :src="require('@/assets/img/svg/' + item.svg + imgVersion + '.svg')"
                    style="max-width: 5rem; max-height: 5rem;"
                    class="mr-2"
                  />
                </div>
                  <v-card-title v-if="item.title" class="mb-2 break-word text-center">
                    <span v-if="item.svg && $vuetify.breakpoint.lgAndUp">
                      <img
                        :src="require('@/assets/img/svg/' + item.svg + imgVersion + '.svg')"
                        style="max-width: 2.5rem; max-height: 2.5rem;"
                        class="mr-2"
                      />
                    </span>
                    <span
                      :style="'font-size:' + item.title.size"
                      class="mb-2 text-center"
                      v-html="item.title.text"
                    ></span>
                  </v-card-title>
                  <v-card-subtitle v-if="item.subtitle" class="text-subtitle break-word">
                    <span v-html="item.subtitle" />
                  </v-card-subtitle>
                  <v-container style="height:100%" class="pa-1">
                    <v-row
                      v-for="(subcard, doublen) in item.subcards"
                      :key="doublen"
                      :style="{ height: (100/item.subcards.length) + '%' }"
                    >
                      <v-hover v-slot:default="{ hover }">
                        <v-card
                          class="lightModeCard"
                          :class="hover && (subcard.link || subcard.router_link) ? getHighlight() : ''"
                          flat
                          :href="subcard.link"
                          :to="subcard.router_link"
                          :target="subcard.link ? '_blank' : ''"
                          width="100%"
                        >
                          <v-container fluid style="height:100%">
                            <v-row style="height:100%">
                              <v-col v-if="subcard.svg" cols="auto" align-self="center">
                                <img
                                  :src="require('@/assets/img/svg/' + subcard.svg + imgVersion + '.svg')"
                                  class="ma-1"
                                />
                              </v-col>
                              <v-col v-if="subcard.title" cols="auto" align-self="center">
                                <v-card-title
                                  v-if="typeof subcard.title === 'string'"
                                  class="ma-0 pa-0 text-svg-title break-word"
                                  v-html="subcard.title"
                                />
                                <v-card-title v-else class="ma-0 pa-0 text-svg-title">
                                  <span v-for="(fragment, triplen) in subcard.title" :key="triplen">
                                    <img
                                      inline
                                      v-if="fragment.type === 'svg'"
                                      :src="require('@/assets/img/svg/' + fragment.contents + imgVersion + '.svg')"
                                      style="max-height:20px"
                                      class="my-0 mx-1 pt-1"
                                    />
                                    <span v-else v-html="fragment.contents" />
                                  </span>
                                </v-card-title>
                                <v-card-subtitle
                                  v-if="typeof subcard.subtitle === 'string'"
                                  class="ma-0 pa-0 text-svg-subtitle"
                                  v-html="subcard.subtitle"
                                />
                                <v-card-subtitle
                                  v-else
                                  class="ma-0 pa-0 text-svg-subtitle break-word"
                                >
                                  <template v-for="(fragment, triplen) in subcard.subtitle">
                                    <span :key="triplen" v-if="fragment.type === 'svg'" class="">
                                      <img
                                        :key="triplen"
                                        :src="require('@/assets/img/svg/' + fragment.contents + imgVersion + '.svg')"
                                        style="max-height:15px"
                                        class="my-0 mx-1 pt-1"
                                      />
                                    </span>
                                    <span
                                      v-else
                                      class="break-word"
                                      :key="triplen"
                                      v-html="fragment.contents"
                                    />
                                  </template>
                                </v-card-subtitle>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-hover>
                    </v-row>
                  </v-container>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import howitworks from "@/assets/data/howitworks.json";
export default {
  data() {
    return {
      data: howitworks.rows,
    };
  },
  // created() {
  //   imgVersion : '-Dark'
  // },
  methods: {
    getHighlight() {
      return {
        lighten: this.$vuetify.theme.isDark,
        darken: !this.$vuetify.theme.isDark,
      };
    },
  },
  computed : {
    imgVersion()  {
      if (this.$vuetify.theme.dark) {
        return '-Dark';
      } else {
        return '-Light';
      }
    }
  }
};
</script>

<style scoped lang="scss">
.col {
  padding: 2px;
  margin: 0px;
}
.row {
  padding: 0px;
  margin: 0px;
}
.container {
  padding: 0px;
  margin: 0px;
  max-width: 2000px;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
}

.rotate {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}

.text {
  &-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  &-subtitle {
    font-size: 1rem;
  }
  &-svg-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  &-svg-subtitle {
    font-size: 1rem;
    text-align: left;
  }
}

.lighten {
  background-color: lighten(#1d1d1d, 20%);
}

.darken {
  background-color: darken(#ffff, 20%);
}
// .lightModeCard {
//   color:
// }
</style>
