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
    padding: 45px 45px 66px 54px;
    background-image: url("~@/assets/img/header/header-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
  }

  &__hand {
    position: absolute;
    z-index: 3;
    width: 653px;
    right: 0;
    bottom: 5px;
  }

  &__vertical-light {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
  }

  &__dust {
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 159px;
  }

  &__ellipse-light {
    position: absolute;
    left: -545px;
    bottom: -400px;
    z-index: -1;
  }

  &__img-ufo {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }
}
</style>
