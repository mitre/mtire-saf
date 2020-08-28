<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mb-0">
      <v-col cols="12" class="mb-0">
        <p
          class="mb-1 primary--text"
          style="font-weight: bold; font-size:200%"
        >The MITRE | SAF Community</p>
        <p
          class="mt-1 mb-0"
        >A very big thank you to our community members for their continued partnership.</p>
        <p class="mt-0 mb-0">
          If you’re interested in being showcased here, please contact
          <a
            style="text-decoration: none;"
            :href="`mailto:${communityData.communityEmail}`"
          >{{communityData.communityEmail}}</a>
          to discuss opportunities.
        </p>
      </v-col>
    </v-row>

    <v-row
      :class="color_mode"
      class="mx-1 mb-5 flex-column"
      style="height: 17rem; min-height: 275px"
      ref="sponsors"
    >
      <v-col class="pb-0" style="flex-grow: 1">
        <p class="mb-0" style="font-size:1.3rem">
          Sponsors
          <v-btn icon to="#sponsors" class="ml-2">
            <v-icon>mdi-link</v-icon>
          </v-btn>
        </p>
      </v-col>
      <v-col class="py-0" style="flex-grow: 5">
        <v-slide-group show-arrows>
          <v-slide-item v-for="(sponsor, i) in sponsors" :key="i">
            <v-card
              class="ma-4"
              elevation="4"
              height="180"
              width="200"
              v-bind:href="sponsor.link"
              target="_blank"
            >
              <v-img :src="getImgUrl(sponsor.img)" class="white" height="100" width="200" contain></v-img>
              <v-card-subtitle class="mb-0">{{sponsor.name}}</v-card-subtitle>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>

    <v-row
      :class="color_mode"
      class="mx-1 mt-5 flex-column"
      style="height: 15rem; min-height: 200px"
      ref="commercial-partners"
    >
      <v-col class="pb-0" style="flex-grow: 1">
        <p class="mb-0" style="font-size:1.3rem">
          Commercial Partners
          <v-btn icon to="#commercial-partners" class="ml-2">
            <v-icon>mdi-link</v-icon>
          </v-btn>
        </p>
      </v-col>
      <v-col class="py-0" style="flex-grow: 5">
        <v-slide-group show-arrows>
          <v-slide-item v-for="(partner, i) in partners" :key="i">
            <v-card
              class="ma-4"
              elevation="4"
              height="150"
              width="200"
              v-bind:href="partner.link"
              target="_blank"
            >
              <v-img
                :src="getImgUrl(partner.img)"
                class="white fixed-ratio-resize"
                height="150"
                width="200"
                contain
              ></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sponsorData from "@/assets/data/sponsors.json";
import partnerData from "@/assets/data/partners.json";
import communityData from "@/assets/data/communityData.json";
export default {
  data() {
    return {
      sponsors: sponsorData["Sponsors"],
      partners: partnerData["Commercial Partners"],
      communityData: communityData,
      showArrows: true,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/img/partners/" + pic);
    },
  },
  computed: {
    color_mode() {
      return this.$vuetify.theme.dark
        ? "darkModeContainer"
        : "lightModeContainer";
    },
  },
  mounted: function () {
    if (this.$route.hash) {
      var element = this.$refs[this.$route.hash.substring(1)];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  },
};
</script>

<style scoped>
.client-logo {
  height: 90px;
  padding: 12px 12px;
  border-radius: 7px;
  background: white;
  border: 1px solid #ebebeb;
  text-align: center;
}

.fixed-ratio-resize {
  /* basic responsive img */
  max-width: 100%;
  height: auto;
  width: auto\9; /* IE8 */
}
</style>
