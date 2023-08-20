<template>
  <div class="base-line">
    <div class="base-line__inner">
      <!--      <BaseIcon-->
      <!--        :name="divideLine"-->
      <!--        :width="divideWidth"-->
      <!--        :height="divideHeight"-->
      <!--        class="base-line__line"-->
      <!--      />-->
      <img :src="require(`@/assets/img/${path}.svg`)" alt="line" />
      <img src="@/assets/img/shine.png" alt="shine" class="base-line__shine" />
    </div>
  </div>
</template>

<script lang="js">
// import BaseIcon from "@/components/Base/BaseIcon.vue";

export default {
  name: 'BaseLine',
  // components: { BaseIcon },
  props: {
    divideLine: {
      type: String,
      default: '',
    },
    divideWidth: {
      type: String,
      default: '100%',
    },
    divideHeight: {
      type: String,
      default: '35',
    },
    path: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss">
.base-line {
  pointer-events: none;

  &__inner {
    position: relative;
  }

  &__shine {
    display: none;

    @media (min-width: $screen-m) {
      display: block;
      position: absolute;
      top: -30px;
      right: 835px;
    }
  }
}
</style>
