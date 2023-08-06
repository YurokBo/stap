<template>
  <div class="text_medium base-period">
    <img src="@/assets/img/icons/clock.svg" alt="clock" />
    <span>{{ text }}</span>
  </div>
</template>

<script lang="js">
export default {
  name: 'BasePeriod',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.base-period {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: $font-family-stem;
  font-weight: 300;
  text-transform: initial;
}
</style>
