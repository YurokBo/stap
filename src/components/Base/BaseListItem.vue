<template>
  <div class="base-list-item">
    <img src="@/assets/img/icons/arrow-right.svg" alt="arrow right" />
    <p v-html="text" class="text text_large"></p>
  </div>
</template>

<script lang="js">
export default {
  name: 'BaseListItem',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.base-list-item {
  display: flex;
  align-items: center;

  > img {
    margin-right: 32px;
  }
}
</style>
