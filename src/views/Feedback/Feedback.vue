<template>
  <main class="feedback">
    <Header />
    <FeedbackHeaderList class="feedback__header-list"/>
    <CheckList />
    <Form />
  </main>
</template>

<script lang="js">
import Header from '@/views/Feedback/components/Header/FeedbackHeader.vue';
import FeedbackHeaderList from '@/views/Feedback/components/Header/FeedbackHeaderList.vue';
import CheckList from '@/views/Feedback/components/CheckList/CheckList.vue';
import Form from '@/views/Feedback/components/Form/Form.vue';

export default  {
  name: 'Feedback',
  components: {
    FeedbackHeaderList,
     Form,  CheckList, Header }
}
</script>

<style lang="scss">
.feedback {
  &__header-list {
    @media (min-width: $screen-l) {
      display: none;
    }
  }
}
</style>
