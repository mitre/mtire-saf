<template>
  <v-container fluid>
    <v-expansion-panels focusable hover tile multiple v-model="panel">
      <v-expansion-panel v-for="(faq, index, i) in faqs" :key="i">
        <v-expansion-panel-header
          class="google-font"
          style="font-weight: 300; font-size:120% "
        >{{faq.question}}</v-expansion-panel-header>
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
                >{{link.name}}</a>
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
            <v-col xs="3">
              <code class="pa-2" v-if="faq.code">{{faq.code}}</code>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- <v-list-item :key="faq.question">
          <v-list-item-content>
            <v-list-item>
              <p
                class="google-font"
                style="color: #1a73e8; font-weight: 200; font-size:120% "
              >{{faq.question}}</p>
            </v-list-item>
            <v-list-item class="google-font">
              <p>{{faq.answer}}</p>
            </v-list-item>
            <v-list-item class="google-font" v-show="faq.link">
              <a :href="faq.link" download>{{faq.link_text}}</a>
            </v-list-item>
            <v-list-item class="google-font" v-show="faq.img">
              <p>{{faq.img}}</p>
            </v-list-item>
            <v-list-item v-show="faq.code">
              <pre><code class="pa-2">{{faq.code}}</code></pre>
            </v-list-item>
          </v-list-item-content>
    </v-list-item>-->
  </v-container>
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