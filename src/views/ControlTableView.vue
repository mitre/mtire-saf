<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col cols="12" lg="10" class="py-0">
          <Header>
            <h3 slot="title">Control Assessment Range</h3>
            <p slot="subtitle">
              All assessment tests under MITRE | SAF are associated with NIST SP 800-53 Security Controls. Explore these associations in the table below!
            </p>
          </Header>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col cols="12" lg="10" class="py-0">
          <controlTable />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Header from "@/components/core/Header.vue";
import controlTable from "@/components/controlTable/ControlTable.vue";

export default {
  components: {
    Header,
    controlTable
  }
};
</script>


