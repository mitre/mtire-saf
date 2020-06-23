<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0 ma-0">
        <Header>
          <h3 slot="title">Validation</h3>
          <p slot="subtitle" class="ma-0 google-font">
            These open-source community-based InSpec profiles validate the security of
            common system components. MITRE is helping to provide stewardship over
            these profiles, hosted here and at other community vendor sites. If you
            are interested in new profiles, please contact us at
            <a
              :href="mail_link"
            >
              {{ db.communityEmail }}
            </a>
            . If you are interested in developing and contributing your own
            profiles, please see our
            <router-link to="training">training material</router-link>.
          </p>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10">
        <profileTemplateCompact :profiles="baselines.baselines" :categoryOrder="categoryOrder" :maxWidth="25"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import Header from "@/components/core/Header.vue";
import baselines from "@/assets/data/baselines.json";
import db from "@/assets/data/communityData.json";

export default {
  components: {
    profileTemplateCompact,
    Header
  },
  data() {
    return {
      baselines: baselines,
      db: db,
      categoryOrder: [
        "Cloud Service Providers",
        "Virtual Platforms",
        "Operating Systems",
        "Databases",
        "Application Logic",
        "Web Servers"
      ]
    };
  },
  computed: {
    mail_link() {
      return "mailto:" + db.communityEmail;
    },
  },
};
</script>
