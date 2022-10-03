<template>
  <v-footer
    height="auto"
    class="ma-0"
    :class="this.$vuetify.theme.dark == true ? 'grey darken-4' : 'white'"
    style="padding: 6px 16px;"
  >
          <v-toolbar
            text
            class="pa-0 px-0 mt-3 mx-0 elevation-0"
            style="padding: 0 !important"
            :class="
              this.$vuetify.theme.dark == true ? 'grey darken-4' : 'white'
            "
          >
          <p
              class="google-font pl-0 ml-0"
              :style="
                this.$vuetify.breakpoint.smAndDown ? '' : 'font-size:200%'
              "
            >
              <img
                slot="img"
                :src="require('@/assets/img/svg/saf_logo.svg')"
                style="width: 2rem; height: 2rem; vertical-align: middle"
              />
              MITRE SAF
            </p>
          
            <v-spacer />
            <a href="https://www.netlify.com"> 
              <img
                :src="require('@/assets/img/svg/netlify' + imgVersion + '.svg')"
                style="width: 2.5rem; height: 2.5rem; vertical-align: middle"
                class="mr-5"
              />
              </a>
              <a href="https://github.com/mitre/mitre-saf" style="text-decoration: none">
                <v-icon v-if="this.$vuetify.theme.dark == true" href="https://github.com/mitre/mitre-saf" x-large color="white">mdi-github</v-icon>
              </a>
              <a href="https://github.com/mitre/mitre-saf" style="text-decoration: none">
                <v-icon v-if="this.$vuetify.theme.dark == false" href="https://github.com/mitre/mitre-saf" x-large color="black">mdi-github</v-icon>
              </a>
            <v-spacer />
            <p
              class="google-font pl-0"
              :style="this.$vuetify.breakpoint.smAndDown ? 'font-size:75%' : ''"
            >
              The MITRE Corporation © {{ new Date().getFullYear() }}
            </p>
          </v-toolbar>
  </v-footer>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import FooterData from "@/assets/data/footer.json";
export default {
  data() {
    return {
      communityData: communityData,
      FooterData: FooterData,
    };
  },
  computed : {
    imgVersion()  {
      if (this.$vuetify.theme.dark) {
        return '-light';
      } else {
        return '-dark';
      }
    }
  },
};
</script>

<style scoped>
.darkThemeTextLink {
  color: #fafafa;
}
.lightThemeTextLink {
  color: #3e4551;
}
</style>