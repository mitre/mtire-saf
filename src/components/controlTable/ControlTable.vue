/*
  phase 0 mvp:
  vuex - dynamic data, totals underneath column, columns
  click on header - as part of filter for true/false
  filters - control names, header names
  default filters
  styling
  */

/*
  ~~text search on first column
  ~~columns = select
  ~~click column = on/off/all
  cosmetics:
    zebra stripe for shading for columns
    wrapping for column headers (no ...s)
    pinstriping/borders on all cells
    swap out the true for inspec/list of 3 things
    ~~checkbox and blank for all
    light + dark mode
*/
<template>
  <div class="wrapper">
    <v-container
      class="d-flex flex-wrap flex-column"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
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
        <v-col
          cols="12"
          sm="6"
        >
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
                >
                  {{col.text}}
                </c-grid-header>
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
                >
                  {{col.checkmark}}
                </c-grid-header>
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
                >
                  {{data.filter(control => control[col.value]).length.toString()}}
                </c-grid-header>
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
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import * as cGridAll from "vue-cheetah-grid";

const { mapGetters, mapMutations } = createNamespacedHelpers("controlTable");

const materialDesignTheme = cGridAll.cheetahGrid.themes.MATERIAL_DESIGN;

export default {
  components: {
    ...cGridAll,
  },
  data() {
    return {
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
        frozenRowsBgColor({row, col}) {
          if (row === 1 && col !== 0 && that.columns[col].checkmark !== "☒") {
            return "#a88132";
          }
          return "#BDBDBD";
        },
        frozenRowsBorderColor: "#35495e",
        selectionBgColor: "#868686",
        highlightBgColor: "#868686",
      });
    },
    darkTheme() {
      const that = this;
      return materialDesignTheme.extends({
        color: "white",
        defaultBgColor({row}) {
          // change the color of the checked row.
          if (row % 2) {
            return "#424242";
          } else {
            return "#212121";
          }
        },
        borderColor: "#35495e",
        frozenRowsColor: "white",
        frozenRowsBgColor({row, col}) {
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
        },
      });
    },
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
  }
}
</style>
