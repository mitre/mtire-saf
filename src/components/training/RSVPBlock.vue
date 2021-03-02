<template>
  <div>
    <h2>RSVP – InSpec profile developer training for March/April 2021!</h2>
    <p>
      The MITRE Security Automation Framework is happy
      to announce plans to again provide training to developers interested in
      learning to create and maintain InSpec profiles.
    </p>
    <p>
      InSpec profiles are a core tool in establishing tailored, transparent,
      open-source community-based automated security testing content.
    </p>
    <p>
      These are free, on-line virtual, hands-on, instructor-led 2-day classes.
    </p>
    <p>
      The
      <a :href="communityData.trainingSiteBasic" target="_blank"
        >base introductory InSpec developer class</a
      >
      will again be offered on March 30-31, 2021 (9am-4pm both days)
    </p>
    <p>
      The
      <a
        :href="communityData.trainingSiteAdvanced"
        target="_blank"
        >follow-on Advanced InSpec developer class</a
      >
      will again be offered on April 13-14, 2021 (9am-4pm both days)
    </p>
    <p>
      Please RSVP if you are interested in attending or have additional
      questions. If you are having trouble with the form, please email
      <a :href="'mailto:' + communityData.trainingContactEmail" target="_blank"
        >SAF@groups.mitre.org.</a
      >
    </p>
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
    <p>
      A note on prerequisites: For the basic class, knowledge of basic
      programming concepts, modern language conventions and some working
      experience with a modern language (e.g., Ruby, Python, Go, etc) is useful.
      (Inspec is a Ruby Domain-specific language (DSL)). To become more familiar
      with Ruby, feel free to review the following Ruby primers. For the
      follow-on advanced class (basic is a preferred prerequisite), we'll be
      writing InSpec Resources in the Ruby language, so it is highly recommended
      students of the advanced class unfamiliar with Ruby review the following
      Ruby primers
      <a
        href="https://www.ruby-lang.org/en/documentation/quickstart/"
        target="_blank"
        >here</a
      >
      and on
      <a
        href="https://www.youtube.com/watch?v=t_ispmWmdjY&vl=en"
        target="_blank"
        >youtube.</a
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
}
</script>