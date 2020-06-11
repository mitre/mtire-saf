<template>
  <v-container fluid>
    <wwdSection :topic="whatwedodata[0]" md="3" lg="3" xl="3" />
    <v-divider class="ma-2" />
    <wwdSection :topic="whatwedodata[1]" md="3" lg="3" xl="3" />
    <v-divider class="ma-2" />
    <wwdSection :topic="whatwedodata[2]" md="4" lg="4" xl="4">
      <template v-slot:image>
      <v-row justify="center">
        <v-img
          :src="require('@/assets/img/what-we-do/' + whatwedodata[2].image + '.png')"
          class="ma-2"
        />
      </v-row>
    </template>
    </wwdSection>
  </v-container>
</template>

<script>
import wwdSection from "@/components/home/wwdComponents/wwdSection.vue";

export default {
  props: {
    whatwedodata: Array
  },
  // data() {
  //   return {
  //     item: Object
  //   };
  // },

  components: {
    wwdSection
  }
};
</script>