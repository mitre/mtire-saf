<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <p class="google-font ma-4 tool-header primary--text">{{ topic.sectionHeader }}</p>
    </v-row>
    <v-row align="center" justify="center" v-if="topic.sectionDesc">
      <p class="google-font mb-4 body-2">{{ topic.sectionDesc }}</p>
    </v-row>
    <slot name="image"></slot>
    <v-row justify="center">
      <v-col
        v-for="(item, i) in topic.items"
        :key="i"
        :cols="cols"
        :sm="sm"
        :md="md"
        :lg="lg"
        :xl="xl"
        class="text-center pa-1 d-flex justify-center"
      >
        <wwdBasicCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import wwdBasicCard from "@/components/home/wwdComponents/wwdBasicCard.vue";
export default {
  components: {
    wwdBasicCard
  },
  props: {
    topic: Object,
    cols: {
      type: String,
      default: "12"
    },
    sm: {
      type: String,
      default: "6"
    },
    md: {
      type: String,
      default: "6"
    },
    lg: {
      type: String,
      default: "3"
    },
    xl: {
      type: String,
      default: "3"
    }
  },
  data: function() {
    return {};
  },
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>

<style scoped>
.tool-header {
  font-size: 200%;
}
</style>