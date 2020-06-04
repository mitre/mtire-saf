<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center" class="pa-2">
        <v-col md="12" lg="10" xs="12" class="pa-0 ma-0">
          <Header>
            <h3 slot="title">Validation</h3>
          </Header>
          <div class="mx-4 google-font">
            <p class="ma-0">
              These open-source community-based InSpec profiles validate the security of
              common system components. MITRE is helping to provide stewardship over
              these profiles, hosted here and at other community vendor sites. If you
              are interested in new profiles, please contact us at
              <a
                :href="mail_link"
              >{{ db.communityEmail }}</a>. If you are interested in developing and contributing your own
              profiles, please see our
              <router-link to="training">training material</router-link>.
            </p>
            <profileTemplateCompact :profiles="baselines.baselines" :categoryOrder="categoryOrder" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import Header from "@/components/core/Header.vue";
import baselines from "@/assets/data/baselines.json";
import db from "@/assets/data/communityData.json";
import { mapMutations } from "vuex";

export default {
  components: {
    profileTemplateCompact,
    Header
  },
  data() {
    return {
      baselines: baselines,
      db: db,
      isCompact: false,
      categoryOrder: [
        "Cloud Service Providers",
        "Application Logic",
        "Databases",
        "Operating Systems",
        "Virtual Platforms",
        "Web Servers"
      ]
    };
  },
  computed: {
    mail_link() {
      return "mailto:" + db.communityEmail;
    },
    showCompact() {
      return this.$store.state.isCompact;
    }
  },
  methods: {
    ...mapMutations(["toggleCompact"])
  }
};
</script>
