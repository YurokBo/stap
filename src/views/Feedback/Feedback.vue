<template>
  <div class="feedback">
    <Header />
    <CheckList />
  </div>
</template>

<script lang="js">

import Header from "@/views/Feedback/components/Header/FeedbackHeader.vue";
import CheckList from "@/views/Feedback/components/CheckList/CheckList.vue";

export default  {
  name: "Feedback",
  components: { CheckList, Header }
}
</script>

<style lang="scss"></style>
