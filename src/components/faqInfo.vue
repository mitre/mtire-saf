<template>
    <v-expansion-panels focusable hover tile multiple>
      <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
        <v-expansion-panel-header
          class="google-font"
          style="font-weight: 300; font-size:120% "
        >
          {{faq.question}}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="my-2">
          <span v-html="faq.answer"></span>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-if="faq.links">
          <ul>
            <li v-for="(link, i) in faq.links" :key="i">
              <span>
                <router-link v-if="link.router_link" :to="link.router_link">{{link.name}}</router-link>
                <a
                  v-else
                  :href="link.download_link ? link.download_link : link.link"
                  target="_blank"
                  :download="link.download_link"
                >
                  {{link.name}}
                </a>
                {{link.desc}}
              </span>
              <ul v-if="link.bullets">
                <li v-for="(entry, i) in link.bullets" :key="i">{{entry}}</li>
              </ul>
            </li>
          </ul>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-if="faq.code" class="hidden-sm-and-down">
          <v-row>
            <v-col>
              <code class="pa-2" v-if="faq.code">{{faq.code}}</code>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import faqs from "@/assets/data/faqs.json";
export default {
  data: () => ({
    faqs: faqs.faqs
  }),
  computed: {
    panel() {
      //allow for a URL to specify which faq to open by default
      var panel = parseInt(this.$route.hash.slice(1)) - 1;
      return [panel];
    }
  }
};
</script>
