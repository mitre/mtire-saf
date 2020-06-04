<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <Header>
            <h3 slot="title">Frequently Asked Questions</h3>
            <p slot="subtitle">
              Have a question you don't see covered here? Please contact
              <a
                style="color:#1565C0;text-decoration: none;"
                :href="`mailto:${communityData.communityEmail}`"
              >{{communityData.communityEmail}}</a>
            </p>
          </Header>
          <faqInfo />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Header from "@/components/core/Header.vue";
import faqInfo from "@/components/faqInfo.vue";
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


