<template>
  <v-container fluid>
      <wwdSection :topic="wwd[0]" />
      <v-divider />
      <wwdSection :topic="wwd[1]" xl="3"/>
      <v-divider />
      <wwdSection :topic="wwd[2]" md="4" lg="4" xl="4"/>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatWeDo.json";
import wwdSection from "@/components/home/wwdComponents/wwdSection.vue";

export default {

  components : {
    wwdSection,
  },
  data: () => ({
    wwd : whatwedodata.whatWeDo
  }),

};
</script>