<template>
  <v-container fluid class="ma-0 pa-0">
    <HowItWorks />
    <wwdSection :topic="whatwedodata[0]" md="6" lg="6" xl="3" />
    <wwdSection :topic="whatwedodata[1]" md="4" lg="4" xl="4" />
  </v-container>
</template>

<script>
  import wwdSection from "@/components/home/wwdComponents/wwdSection.vue";
  import HowItWorks from "@/components/home/wwdComponents/HowItWorks.vue";

  export default {
    props: {
      whatwedodata: Array,
    },
    // data() {
    //   return {
    //     item: Object
    //   };
    // },

    components: {
      wwdSection,
      HowItWorks,
    },
  };
</script>
