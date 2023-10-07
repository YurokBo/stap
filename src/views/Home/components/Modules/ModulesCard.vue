<template>
  <div class="modules-card">
    {{ text }}
    <img
      :src="require(`@/assets/img/modules/${iconPath}/${index + 1}.png`)"
      alt="module icon"
    />
  </div>
</template>

<script lang="js">
export default {
  name: 'ModulesCard',
  props: {
    index: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    },
    iconPath: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss">
.modules-card {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 20px 10px 26px;
  border-radius: 10px;
  border: 2px solid var(--color-border);
  background-color: var(--color-bg-dark-blue2);
  color: var(--color-text-white);
  text-align: center;
  font-family: $font-family-micra;
  font-size: 14px;
  font-weight: 400;
  line-height: 2.18;

  @media (min-width: $screen-l) {
    flex-direction: row;
    width: 596px;
    height: 150px;
    padding: 10px 75px;
    font-size: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 29px;
    bottom: -5.5px;
    width: 132px;
    height: 17.5px;
    background-color: var(--color-bg-light-blue);
    transform: skew(-30deg);
    box-shadow: 9px -12px 23px -6px rgba(0, 0, 0, 0.4);
  }

  > img {
    width: 55px;
    height: 55px;
    margin-bottom: 10px;

    @media (min-width: $screen-l) {
      position: absolute;
      top: 50%;
      right: 29px;
      margin-bottom: 0;
      transform: translateY(-50%);
    }
  }

  &:hover {
    color: var(--color-text-black);
    background-color: var(--color-bg-light-blue);
    > img {
      filter: saturate(0%) grayscale(100%) brightness(0);
    }
  }
}
</style>
