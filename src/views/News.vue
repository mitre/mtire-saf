<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <Header>
          <h3 slot="title">What's New</h3>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <newsInfo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Header from "@/components/core/Header.vue";
  import newsInfo from "../components/News/newsInfo";

  export default {
    components: {
      Header,
      newsInfo,
    },
  };
</script>
