<template>
  <v-container fluid class="pa-0 pb-4 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0 ma-0">
        <Header>
          <h3 slot="title">Harden</h3>
          <p slot="subtitle">
            These open-source community-based hardening baselines help to
            securely configure common system components. MITRE is helping to
            provide stewardship over these hardening baselines, hosted here and
            at other community vendor sites. If you are interested in new
            hardening baselines, please contact us at
            <a :href="mail_link">
              {{ db.communityEmail }}
            </a>
            .
          </p>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10">
        <profileTemplateCompact
          :profiles="hardening.hardening"
          :categoryOrder="categoryOrder"
          :maxWidth="20"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
  import Header from "@/components/core/Header.vue";
  import hardening from "@/assets/data/hardening.json";
  import db from "@/assets/data/communityData.json";

  export default {
    components: {
      profileTemplateCompact,
      Header,
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
          "Network",
          "Application Logic",
          "Web Servers",
        ],
      };
    },
    computed: {
      mail_link() {
        return "mailto:" + db.communityEmail;
      },
    },
  };
</script>
