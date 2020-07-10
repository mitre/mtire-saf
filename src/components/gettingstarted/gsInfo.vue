<template>
  <div class="pa-2">
    <div v-for="item in resources.items" :key="item.name">
      <p class="mb-2 wrap-list-text">
        <b>{{item.name}}</b>
      </p>
      <p flat class="ma-2">{{item.desc}}</p>
      <p flat dense class="ma-2 " v-for="entry in item.values" :key="entry.name">
        <span>
          <a v-if="entry.link" :href="entry.link" target="_blank">{{entry.name}}</a>
          <a
            v-if="entry.download_link"
            :href="entry.download_link"
            target="_blank"
            download
          >
            {{entry.name}}
          </a>
        </span>
      </p>
      <v-img v-if="item.image" :src="require('@/assets/img/tools/' + item.image)" />
    </div>
  </div>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
export default {
  data: () => ({
    communityData: communityData,
    trainingData: trainingData,
    resources: resources,
  }),
};
</script>

<style scoped>
.wrap-list-text {
  -webkit-line-clamp: unset !important;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  hyphens: none;
  font-size: 150%;
  color: #1a73e8;
}
</style>
