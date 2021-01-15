<template>
  <Header>
    <h3 slot="title" style="font-size: 3rem">
      <img
        slot="img"
        :src="require('@/assets/img/svg/saf_logo.svg')"
        style="max-width: 5rem; max-height: 5rem; vertical-align:middle"
        class="mr-2"
      />Security Automation Framework
    </h3>
    <p slot="subtitle">{{ communityData.communityShortDescription }}</p>
  </Header>
</template>

<script>
import Header from "@/components/core/Header.vue";
import communityData from "@/assets/data/communityData.json";
export default {
  data() {
    return {
      communityData: communityData,
    };
  },
  components: {
    Header,
  },
};
</script>
