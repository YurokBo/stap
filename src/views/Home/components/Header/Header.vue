<template>
  <header class="header">
    <div class="wrap header__wrap">
      <div class="header__inner">
        <HeaderContent />
        <HeaderAnimation />
        <img
          v-for="(image, i) in images"
          :key="i"
          :src="require(`@/assets/img/header/${image.img}`)"
          :alt="image.alt"
          :class="image.class"
        />
      </div>
    </div>
  </header>
</template>

<script lang="js">
import HeaderContent from "@/views/Home/components/Header/HeaderContent.vue";
import HeaderAnimation from "@/views/Home/components/Header/HeaderAnimation.vue";

export default {
  name: 'Header',
  components: { HeaderAnimation, HeaderContent },
  data: () => ({
    images: [
      {img: 'ufo.png', class: 'header__img-ufo', alt: 'ufo'},
      {img: 'ufo-mobile.png', class: 'header__img-ufo_mobile', alt: 'ufo'},
      {img: 'hand2.png', class: 'header__hand', alt: 'hand2'},
      {img: 'vertical-light.svg', class: 'header__vertical-light', alt: 'vertical-light'},
      {img: 'dust.png', class: 'header__dust', alt: 'dust'},
      {img: 'ellipse-light.svg', class: 'header__ellipse-light', alt: 'ellipse-light'},
    ]
  })
}
</script>

<style lang="scss">
.header {
  padding: 111px 0 0;

  &__inner {
    position: relative;
    padding: 66px 17px 17px;
    background-image: url(~@/assets/img/common-header-bg-mobile.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;

    @media (min-width: $screen-l) {
      padding: 45px 45px 66px 54px;
      background-image: url(~@/assets/img/common-header-bg.png);
    }
  }

  &__bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__hand {
    position: absolute;
    z-index: 3;
    width: 325px;
    right: 0;
    bottom: 17px;

    @media (min-width: $screen-l) {
      bottom: 0;
      width: 653px;
    }
  }

  &__vertical-light {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media (min-width: $screen-l) {
      right: 0;
      left: unset;
      width: initial;
      height: 100%;
    }
  }

  &__dust {
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;

    @media (min-width: $screen-l) {
      right: 159px;
    }
  }

  &__ellipse-light {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
      position: absolute;
      left: -545px;
      bottom: -400px;
      z-index: -2;
    }
  }

  &__img-ufo {
    display: none;

    @media (min-width: $screen-l) {
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      z-index: 0;
    }

    &_mobile {
      position: absolute;
      top: 0;
      right: -16px;
      z-index: 0;
      width: 400px;

      @media (min-width: $screen-l) {
        display: none;
      }
    }
  }
}
</style>
