<template>
  <v-container fluid class="pa-0">
    <v-row align="center" justify="center" class="ma-0">
      <v-col class="pa-0">
        <p class="primary--text mb-2" style="font-size: 1.5rem">
          <b>Training Courses Currently Offered</b>
        </p>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="ma-0">
      <v-col v-for="(course, i) in trainingData.courses" :key="i" class="pa-0 ps-2" style="border-left: 1px solid var(--v-primary-base)">
        <a :href="course.link" target="_blank" style="font-size: 1.25rem">{{course.name}}</a>
        <p class="my-2">{{course.desc}}</p>
        <ul>
          <li v-for="(bullet, j) in course.bullets" :key="j" class="ms-2">{{bullet}}</li>
        </ul>
      </v-col>
    </v-row>

    <!-- <v-row align="center" justify="center" class="ma-0 mt-2">
      <v-col class="pa-0">
        <p class="primary--text my-2" style="font-size: 1.5rem">
          <b>Upcoming Training Sessions</b>
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="start" class="ma-0">
      <v-col
        cols="12"
        lg="10"
        class="pa-0"
        v-for="(item, i) in trainingData.upcomingTraining.introTraining"
        :key="'upcoming'+i"
      >
        <p class="ma-0 pa-0">{{item.name}}</p>
      </v-col>
    </v-row> -->
    <RSVPBlock class="mt-4" />

    <v-row align="center" justify="center" class="ma-0 mt-2">
      <v-col class="pa-0">
        <p class="primary--text my-2" style="font-size: 1.5rem">
          <b>Past Training Sessions</b>
        </p>
        <p
          class="ma-0"
        >Trainings are listed in chronological order by date.</p>
        <p class="ma-0">
          <b>Note:</b> Video recordings of these trainings will be made available once they are edited for presentability.
        </p>
      </v-col>
    </v-row>
    <v-row :class="color_mode" class="ma-0 mb-3" style="height: 10rem">
      <v-col class="pa-0">
        <v-slide-group show-arrows class="py-3">
          <v-slide-item v-for="(item, i) in pastTrainings" :key="i">
            <v-dialog v-model="dialog" :dialogData="item" width="33rem">
              <template v-slot:activator="{ on }">
                <v-card
                  width="15rem"
                  height="8rem"
                  style="white-space: initial;"
                  :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'lightModeCard'"
                  class="pa-2 mx-2"
                >
                  <p class="ma-0 break-word" style="font-size: 0.9rem">{{ item.date }}</p>
                  <p
                    class="ma-0 mt-0 break-word"
                    style="font-size: 1.2rem"
                  >{{ item.name }}</p>
                  <p class="mb-0 mt-2 primary--text" style="cursor: pointer" v-on="on" @click="passItemData(item)">See More</p>
                </v-card>
              </template>

              <v-card v-show="dialog" :data="dialogData" class="pa-5">
                <v-card-title class="pa-0 break-word">{{dialogData.name}}</v-card-title>
                <v-card-text class="pa-0">
                  <p class="mt-3 mb-0 break-word" style="font-size:1.1rem">
                    <b>Name:</b>
                    {{dialogData.name}}
                  </p>
                  <p class="mt-1 mb-0" style="font-size:1.1rem">
                    <b>Date:</b>
                    {{dialogData.date}}
                  </p>
                  <a
                    v-if="dialogData.link != ''"
                    :href="dialogData.link"
                    target="_blank"
                    class="mt-2"
                  >
                    Link to Recording
                  </a>
                  <p
                    v-else
                    class="mt-2"
                  >
                    <b>Link to Recording: </b>
                    <span style="color: var(--v-error-base)">Video still being edited! Please check back later.</span>
                  </p>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
import RSVPBlock from "@/components/training/RSVPBlock.vue"
export default {
  name: "App",
  data: () => ({
    communityData: communityData,
    trainingData: trainingData.training[0],
    resources: resources,
    dialog: false,
    dialogData: {
      name: "",
      date: "",
      link: ""
    }
  }),
  computed: {
    color_mode() {
      if (this.$vuetify.theme.dark) return "darkModeContainer";
      return "lightModeContainer";
    },
    pastTrainings() {
      return this.trainingData.pastTraining.introTraining.concat(this.trainingData.pastTraining.advTraining);
    },
  },
  components: {
    RSVPBlock
  },
  methods: {
    passItemData(item) {
      this.dialogData = item;
    }
  }
};
</script>
