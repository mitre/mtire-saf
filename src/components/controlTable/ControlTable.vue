<template>
  <div class="wrapper">
    <v-container class="d-flex flex-wrap flex-column">
      <v-row>
        <v-col cols="12" sm="6">
          <v-combobox
            v-model="controlFilters"
            clearable
            deletable-chips
            dense
            :filter="caselessFilter"
            hide-selected
            :hint="'If you can see this hint, it probably means you\'re typing a filter that won\'t work'"
            :items="[{ header: 'Select an option or type one and hit enter' }].concat(controls)"
            :label="'Control Row Filter'"
            eager
            :menu-props="'auto'"
            multiple
            small-chips
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-combobox
            v-model="profileFilters"
            clearable
            deletable-chips
            dense
            :filter="caselessFilter"
            hide-selected
            :hint="'If you can see this hint, it probably means you\'re typing a filter that won\'t work'"
            :items="[{ header: 'Select an option or type one and hit enter' }].concat(profiles)"
            :label="'Assessment Column Filter'"
            eager
            :menu-props="'auto'"
            multiple
            small-chips
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-sheet :width="'100%'" :height="'70vh'">
            <c-grid
              ref="grid"
              class="ma-0"
              :data="data"
              :frozen-col-count="2"
              :theme="this.$vuetify.theme.dark ? darkTheme : lightTheme"
              :underlay-background-color="this.$vuetify.theme.dark ? 'black' : 'white'"
              :headerRowHeight="[70, 25, 20]"
              :defaultRowHeight="20"
              :defaultColWidth="130"
            >
              <template slot="layout-header">
                <c-grid-layout-row>
                  <c-grid-header
                    v-for="col of columns"
                    :key="col.value"
                    :width="col.width ? col.width : undefined"
                    :header-field="col.value"
                    :header-type="'multilinetext'"
                    :header-style="{ autoWrapText: true, textAlign: 'center', textBaseline: 'middle' }"
                    :header-action="'check'"
                    @changed-header-value="onChangeHeaderValue"
                  >{{col.text}}</c-grid-header>
                </c-grid-layout-row>
                <c-grid-layout-row>
                  <c-grid-header
                    v-for="col of columns"
                    :key="col.value"
                    :width="col.width ? col.width : undefined"
                    :header-field="col.value"
                    :header-style="{ ...{ textAlign: 'center', textBaseline: 'middle' }, ...{ font: col.checkmarkFont } }"
                    :header-action="'check'"
                    @changed-header-value="onChangeHeaderValue"
                  >{{col.checkmark}}</c-grid-header>
                </c-grid-layout-row>
                <c-grid-layout-row>
                  <c-grid-header
                    v-for="col of columns"
                    :key="col.value"
                    :width="col.width ? col.width : undefined"
                    :header-field="col.value"
                    :header-style="{ textAlign: 'center', textBaseline: 'middle' }"
                    :header-action="'check'"
                    @changed-header-value="onChangeHeaderValue"
                  >{{data.filter(control => control[col.value]).length.toString()}}</c-grid-header>
                </c-grid-layout-row>
              </template>
              <template slot="layout-body">
                <c-grid-layout-row>
                  <c-grid-column
                    v-for="col of columns"
                    :key="col.value"
                    :field="col.field"
                    :column-type="col.type"
                    :column-style="{ textAlign: col.align, textBaseline: 'middle' }"
                  />
                </c-grid-layout-row>
              </template>
            </c-grid>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card flat outlined class="px-2">
            <v-row dense>
              <v-col>
                <v-card class="d-flex justify-center" dense flat tile>Legend</v-card>
                 <v-divider class="" />
              </v-col>
            </v-row>
            <v-row dense>
              <v-col
                cols="12"
                sm="6"
                v-for="(entry, index) of controlTable.legend"
                :key="index"
                class="pa-0"
              >
                <div class="px-2 ma-1 google-font" style="border-left:1px solid blue">
                  <p class="ma-0" style="font-size:0.9rem">{{entry.name}}</p>
                  <span style="font-size:0.8rem" v-html="entry.desc" />
                </div>
                <!-- <v-card :elevation="0" tile>
                  <v-list-item dense two-line class="py-0">
                    <v-list-item-content
                      class="pa-0"
                      :style="{ 'align-items' : 'start'}"
                    >
                      <v-list-item-title>{{entry.name}}</v-list-item-title>
                      <v-list-item-subtitle class="pa-0 pt-2">
                        <span v-html="entry.desc" />
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>-->
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import * as cGridAll from "vue-cheetah-grid";
import controlTable from "@/assets/data/controltable.json";

const { mapGetters, mapMutations } = createNamespacedHelpers("controlTable");

const materialDesignTheme = cGridAll.cheetahGrid.themes.MATERIAL_DESIGN;

export default {
  components: {
    ...cGridAll
  },
  data() {
    return {
      controlTable: controlTable.controlTable[0]
    };
  },
  computed: {
    ...mapGetters({
      data: "getData",
      columns: "getColumns",
      controls: "getControls",
      profiles: "getProfiles",
      getControlFilters: "getControlFilters",
      getProfileFilters: "getProfileFilters"
    }),
    controlFilters: {
      get() {
        return this.getControlFilters;
      },
      set(val) {
        this.setControlFilters(val);
      }
    },
    profileFilters: {
      get() {
        return this.getProfileFilters;
      },
      set(val) {
        this.setProfileFilters(val);
      }
    },
    lightTheme() {
      const that = this;
      return materialDesignTheme.extends({
        color: "black",
        defaultBgColor({ row }) {
          // change the color of the checked row.
          if (row % 2) {
            return "#EFEFEF";
          } else {
            return "#BDBDBD";
          }
        },
        borderColor: "#35495e",
        frozenRowsColor: "black",
        frozenRowsBgColor({ row, col }) {
          if (row === 1 && col !== 0 && that.columns[col].checkmark !== "☒") {
            return "#a88132";
          }
          return "#BDBDBD";
        },
        frozenRowsBorderColor: "#35495e",
        selectionBgColor: "#868686",
        highlightBgColor: "#868686"
      });
    },
    darkTheme() {
      const that = this;
      return materialDesignTheme.extends({
        color: "white",
        defaultBgColor({ row }) {
          // change the color of the checked row.
          if (row % 2) {
            return "#424242";
          } else {
            return "#212121";
          }
        },
        borderColor: "#35495e",
        frozenRowsColor: "white",
        frozenRowsBgColor({ row, col }) {
          if (row === 1 && col !== 0 && that.columns[col].checkmark !== "☒") {
            return "#a88132";
          }
          return "#212121";
        },
        frozenRowsBorderColor: "#35495e",
        selectionBgColor: "#868686",
        highlightBgColor: "#868686",
        checkbox: {
          checkBgColor: "#35495e",
          borderColor: "#35495e"
        },
        button: {
          color: "#FFF",
          bgColor: "#2c3e50"
        }
      });
    }
  },
  watch: {},
  methods: {
    ...mapMutations({
      setControlFilters: "setControlFilters",
      setProfileFilters: "setProfileFilters",
      updateColumnFilters: "updateColumnFilters"
    }),
    caselessFilter(item, queryText, itemText) {
      if (item.header) {
        return false;
      }
      return itemText.toLowerCase().includes(queryText.toLowerCase());
    },
    onChangeHeaderValue({ field }) {
      this.updateColumnFilters(field);
      this.$nextTick(() => this.$refs.grid.invalidate());
    }
  }
};
</script>

<style lang='scss'>
.wrapper {
  width: 100%;

  .container {
    padding: 0;

    .v-list-item__subtitle {
      white-space: normal;
    }

    .checkbox {
      font-size: 30px;
      vertical-align: sub;
      // letter-spacing: -3px;
    }
  }
}
</style>
