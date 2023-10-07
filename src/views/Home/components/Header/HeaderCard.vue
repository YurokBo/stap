<template>
  <div class="header-card">
    <p class="text" v-html="text" />
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 207px;
    height: 109px;
    padding: 20px 12px;
    background-image: url("~@/assets/img/header/header-card-bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    font-size: 14px;
    text-align: center;

    @media (min-width: $screen-l) {
      display: initial;
      width: initial;
      height: initial;
      padding: 38px 23px 38px 26px;
      text-align: left;
    }
  }
}
</style>
