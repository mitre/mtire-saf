<template>
  <v-container fluid class="ma-0">
    <!-- <RSVPBlock /> -->

    <div v-for="(section, index) in newsData.whatsnew" :key="index">
      
      <h2>{{ section.header }}</h2>
      <p>

      <ul>
        <li v-for="(bullet, index) in section.content" :key="index">
          <span v-html="bullet"></span>
        </li>
      </ul>
      </p>
    </div>
  </v-container>
</template>

<script>
import newsData from "@/assets/data/news.json";
// import RSVPBlock from "@/components/training/RSVPBlock.vue"
export default {
  data() {
    return {
      newsData: newsData,
    };
  },
  components: {
    // RSVPBlock
  },
};
</script>