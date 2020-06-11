<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center" class="pa-2">
        <v-col md="12" lg="10" xs="12" class="pa-0 ma-0">
          <Header>
            <h3 slot="title">Hardening</h3>
          </Header>
          <div class="mx-4 google-font">
            <p class="ma-0">
              These open-source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at
              <a
                :href="mail_link"
              >{{ db.communityEmail }}</a>.
            </p>
          </div>
        </v-col>
      </v-row>
      <profileTemplateCompact class="mx-1" :profiles="hardening.hardening" :categoryOrder="categoryOrder" />
    </v-container>
  </v-content>
</template>

<script>
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import Header from "@/components/core/Header.vue";
import hardening from "@/assets/data/hardening.json";
import db from "@/assets/data/communityData.json";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    profileTemplateCompact,
    Header
  },
  data() {
    return {
      hardening: hardening,
      db: db,
      categoryOrder: [
        "Cloud Service Providers",
        "Virtual Platforms",
        "Operating Systems",
        "Databases",
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
    ...mapMutations(["toggleCompact"]),
    ...mapGetters(["isCompactGetter"])
  }
};
</script>