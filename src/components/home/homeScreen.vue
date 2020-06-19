<template>
  <Header>
    <h3 slot="title" style="font-size: 3.0rem">
      Security Automation Framework
    </h3>
    <p slot="subtitle">{{communityData.communityShortDescription}}</p>
  </Header>
</template>

<script>
import Header from "@/components/core/Header.vue";
import communityData from "@/assets/data/communityData.json";
export default {
  data() {
    return {
      communityData: communityData
    };
  },
  components: {
    Header,
  },
};
</script>
