<template>
  <div>
    <div class="seperator">
      <h1><u>Upcoming Class Offerings: </u></h1>
    </div>
    <h2 class="mb-2">SAF training February 2023!</h2>
    <p >
      Sponsored by MDA, the MITRE SAF team is happy to announce plans to provide training about Security Automation Development. 
      These are free, on-line virtual, hands-on, instructor-led 1-2 day classes.
    </p>
    <p >
      <a :href="communityData.trainingSiteBasic" target="_blank"
        >The Beginner Security Automation Developer Class</a
      >
      will again be offered February 8-9, 2023 (10am-5pm ET both days) (12 CPE).
      <br>
      <a :href="communityData.trainingSiteAdvanced" target="_blank"
        >The follow-on Advanced Security Automation Developer Class</a
      >
      will again be offered in Febraury 22-23, 2023 (10am-5pm ET both days) (12 CPE).
    </p>
    <p >
      <v-btn
        elevation="8"
        large
        outlined
        text
        x-large
        :href="communityData.trainingSignUpLink"
        target="_blank"
        class="ma-8"
        color="accent"
        >RSVP!</v-btn
      >
      Please RSVP if you are interested in attending. If you are having trouble with the form, please email
      <a :href="'mailto:' + communityData.trainingContactEmail" target="_blank"
        >SAF@groups.mitre.org.</a
      >
      <br>
      For information on prerequisites and resources for learning Ruby, look at the saf-training material available 
      <a
        href="https://mitre.github.io/saf-training/"
        target="_blank"
        >here</a
      > or
      <a
        href="https://mitre-saf-training.netlify.app/"
        target="_blank"
        >here.</a
      >
    </p>
    <div class="seperator">
      <h1><u>Class List: </u></h1>
    </div>
  </div>
</template>
<script>
  import communityData from "@/assets/data/communityData.json";
  export default {
    data() {
      return {
        communityData: communityData,
      };
    },
  };
</script>
