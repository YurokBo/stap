<template>
  <main class="feedback">
    <Header />
    <CheckList />
    <Form />
  </main>
</template>

<script lang="js">
import Header from "@/views/Feedback/components/Header/FeedbackHeader.vue";
import CheckList from "@/views/Feedback/components/CheckList/CheckList.vue";
import Form from "@/views/Feedback/components/Form/Form.vue";

export default  {
  name: "Feedback",
  components: { Form, CheckList, Header }
}
</script>

<style lang="scss"></style>
