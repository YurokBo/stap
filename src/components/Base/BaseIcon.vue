<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax meet"
    :width="width"
    :height="height"
  >
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script>
import sprite from "@/assets/img/icons/icons-sprite.svg";

export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 24,
    },
    height: {
      type: [String, Number],
      default: 24,
    },
  },
  computed: {
    iconPath() {
      return `${sprite}#${this.name}`;
    },
  },
};
</script>

<style lang="scss"></style>
