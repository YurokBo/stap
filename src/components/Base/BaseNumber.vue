<template>
  <div class="colored-el base-number" :class="getSize">{{ getNumber }}.</div>
</template>

<script lang="js">
export default {
  name: 'BaseNumber',
  props: {
    number: {
      type: Number,
      default: 0
    },
    isSizeLarge: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    getNumber() {
      return this.number <= 9 ? `0${this.number}` : this.number;
    },
    getSize() {
      return `base-number_${this.isSize ? 'large' : 'small'}`;
    }
  }
}
</script>

<style lang="scss">
.base-number {
  font-family: $font-family-micra;
  font-weight: 400;

  &_large {
    font-size: 52px;
    line-height: 0.77;
  }

  &_small {
    font-size: 22px;
    line-height: 1.8;
  }
}
</style>
