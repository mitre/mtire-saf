<template>
  <div>
    <h2 class="mb-2">Upcoming Class Offerings: SAF Training February 2023!</h2>
    <p >
      Sponsored by <a href="https://www.mda.mil/" target="_blank">MDA</a>, the MITRE SAF Team is happy to announce its first round of security automation training courses for 2023. 
      These are free, on-line virtual, hands-on, instructor-led two-day courses.
    </p>
    <ul>
      <li><a :href="communityData.trainingSiteBasic" target="_blank"
        >The Beginner Security Automation Developer Class</a
      >
      will again be offered February 8-9, 2023 (10am-5pm ET both days) (12 CPE).
      </li>
      <li>The follow-on 
      <a :href="communityData.trainingSiteAdvanced" target="_blank"
        >Advanced Security Automation Developer Class</a
      >
      will again be offered in Febraury 22-23, 2023 (10am-5pm ET both days) (12 CPE).</li>
    </ul>
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
