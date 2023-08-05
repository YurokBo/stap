<template>
  <div class="header-card">
    <p class="text text_small" v-html="text" />
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderCard",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.header {
  &-card {
    position: relative;
    padding: 38px 23px 38px 26px;
    background-image: url("~@/assets/img/header/header-card-bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
  }
}
</style>
