<template>
  <div class="button-shine">
    <div class="button-shine__center1"></div>
    <div class="button-shine__center2"></div>
    <div class="button-shine__center3"></div>
    <div class="button-shine__center4"></div>
  </div>
</template>

<script lang="js">
export default {
  name: 'ButtonShine',
}
</script>

<style lang="scss">
.button-shine {
  position: relative;
  z-index: 10;

  &__center1 {
    position: absolute;
    z-index: 1;
    left: 102px;
    width: 29px;
    height: 9.223px;
    filter: blur(1px);
    border-radius: 50%;
    background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, #9CEAFF 100%);
  }

  &__center3 {
    position: absolute;
    z-index: 2;
    bottom: -27px;
    left: 74px;
    width: 86px;
    height: 44px;
    background-color: #5ECAE7;
    filter: blur(75px);
    border-radius: 50%;
  }

  &__center4 {
    position: absolute;
    z-index: 2;
    bottom: -39px;
    left: 52px;
    width: 136px;
    height: 71px;
    background-color: #009BFF;
    filter: blur(100px);
    border-radius: 50%;
  }
}
</style>
