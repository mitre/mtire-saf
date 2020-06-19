<template>
  <v-container fluid class="pa-0">
    <v-row align="center" justify="center" class="ma-0">
      <v-col class="pa-0">
        <p class="google-font primary--text mb-2" style="font-size: 1.5rem">
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

    <v-row align="center" justify="center" class="ma-0 mt-2">
      <v-col class="pa-0">
        <p class="primary--text my-2" style="font-size: 1.5rem">
          <b>Upcoming Training Sessions</b>
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="left" class="ma-0">
      <v-col
        cols="12"
        lg="10"
        class="pa-0"
        v-for="(item, i) in trainingData.upcomingTraining.introTraining"
        :key="'upcoming'+i"
      >
        <p class="ma-0 pa-0">{{item.name}}</p>
      </v-col>
    </v-row>

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
    <v-row :class="color_mode" class="ma-0 mb-3" style="height: 11rem">
      <v-slide-group show-arrows class="py-3">
        <v-slide-item
          v-for="(item, i) in trainingData.pastTraining.introTraining"
          :key="'past'+i"
          class="mx-5"
        >
          <v-dialog v-model="dialog" :dialogData="item" width="700">
            <template v-slot:activator="{ on }">
              <div
                v-on="on"
                style="cursor: pointer; width: 275px; height: 150px; white-space: initial;"
                :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'lightModeCard'"
                class="pa-2"
                @click="passItemData(item)"
              >
                <p class="mt-1 mb-0 break-word" style="font-size:90%">{{ item.date }}</p>
                <p
                  class="ma-0 mt-0 break-word"
                  style="font-size:120%;"
                >{{ item.name }}</p>
                <p class="mb-0 mt-2 primary--text">See More</p>
              </div>
            </template>

            <v-card color v-show="dialog" :data="dialogData">
              <v-card-title
                class="pa-5 break-word"
                style="background-position:right bottom;"
              >{{dialogData.name}}</v-card-title>

              <v-card-text class="pa-5">
                <p class="mt-3 mb-0 break-word" style="font-size:110%">
                  <b>Name:</b>
                  {{dialogData.name}}
                </p>
                <p class="mt-1 mb-0" style="font-size:110%">
                  <b>Date:</b>
                  {{dialogData.date}}
                </p>
                <v-spacer class="ma-2" />
                <a
                  v-if="dialogData.link != ''"
                  :href="dialogData.link"
                  target="_blank"
                >Link to Recording</a>
                <p v-else>
                  <b>Link to Recording -</b>
                  <span style="color:red">Video still being edited! Please check back later.</span>
                </p>
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-dialog>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
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
  },
  methods: {
    passItemData(item) {
      this.dialogData = item;
    }
  }
};
</script>
