<template>
  <div class="targets-row">
    <p class="text text_medium" v-html="textLeft" />
    <img
      src="@/assets/img/icons/arrow-right.svg"
      alt="arrow right"
      class="targets-row__arrow"
    />
    <p class="text text_medium text_bold" v-html="textRight" />
  </div>
</template>

<script lang="js">
export default {
  name: 'TargetsRow',
  props: {
    textLeft: {
      type: String,
      required: true,
    },
    textRight: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.targets-row {
  display: flex;
  align-items: center;
  padding: 20px 22px 20px 8px;

  &:nth-child(2n + 1) {
    background-color: var(--color-bg-dark-blue);
    border-radius: 10px;
  }

  &__arrow {
    margin: 0 18px 0 10px;
  }
}
</style>
