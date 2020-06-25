<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <Header>
          <h3 slot="title">Frequently Asked Questions</h3>
          <p slot="subtitle">
            Have a question you don't see covered here? Please contact
            <a
              style="text-decoration: none;"
              :href="`mailto:${communityData.communityEmail}`"
            >
              {{communityData.communityEmail}}
            </a>
            .
          </p>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0 pb-5">
      <v-col cols="12" lg="10" class="pa-0">
        <faqInfo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/core/Header.vue";
import faqInfo from "@/components/FAQ/faqInfo.vue";
import communityData from "@/assets/data/communityData.json";

export default {
  data() {
    return {
      communityData: communityData
    };
  },
  components: {
    Header,
    faqInfo
  }
};
</script>
