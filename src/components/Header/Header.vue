<template>
  <header class="header">
    <div class="wrap header__wrap">
      <div class="header__inner">
        <HeaderContent />
        <img
          src="@/assets/img/header/hand2.png"
          alt="hand"
          class="header__hand"
        />
        <img
          src="@/assets/img/header/vertical-light.svg"
          alt="light"
          class="header__vertical-light"
        />
        <img
          src="@/assets/img/header/dust.png"
          alt="dust"
          class="header__dust"
        />
        <HeaderAnimation />
        <img
          src="@/assets/img/header/ellipse-light.svg"
          alt="light"
          class="header__ellipse-light"
        />
      </div>
    </div>
  </header>
</template>

<script lang="js">
import HeaderContent from "@/components/Header/HeaderContent";
import HeaderAnimation from "@/components/Header/HeaderAnimation.vue";

export default {
  name: 'Header',
  components: { HeaderAnimation, HeaderContent },
}
</script>

<style lang="scss">
.header {
  padding: 111px 0 50px;

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
}
</style>
