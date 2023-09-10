<template>
  <section id="about" class="about">
    <div class="ellipse-light about__ellipse-light" />
    <img
      v-for="digit in digits"
      :key="digit"
      :src="require(`@/assets/img/about/digits-${digit}.svg`)"
      alt="digits"
      class="about__digits"
      :class="`about__digits_${digit}`"
    />
    <div class="wrap about__wrap">
      <p class="text_large text_bold about__title">
        <span class="colored-el">АИСОТ</span> - Это решения для автоматизации
        процессов охраны труда, промышленной и пожарной безопасности, экологии и
        других взамосвязанных направлений
      </p>
      <AboutDescription class="about__description" />
      <AboutDescriptionMobile class="about__description_mobile" />
      <BaseButton />
    </div>
  </section>
</template>

<script lang="js">

import BaseButton from "@/components/Base/BaseButton.vue";
import AboutDescription from "@/views/Home/components/About/AboutDescription.vue";
import AboutDescriptionMobile from "@/views/Home/components/About/AboutDescriptionMobile.vue";

export default {
  name: 'About',
  components: { AboutDescriptionMobile, AboutDescription, BaseButton },
  data: () => ({
    digits: ['left', 'right']
  })
};
</script>

<style lang="scss">
.about {
  position: relative;
  padding: 82px 0 44px;
  scroll-margin-top: $scroll-margin-top;

  &__ellipse-light {
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 561px;

    @media (min-width: $screen-l) {
      top: 283px;
      transform: translateX(-60%);
      width: 945px;
      height: 945px;
    }
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__digits {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
      position: absolute;
      top: -45px;
      z-index: -2;
    }

    &_left {
      left: 0;
    }

    &_right {
      right: 0;
    }
  }

  &__title {
    width: 311px;
    margin: 0 auto;
    text-align: center;

    @media (min-width: $screen-l) {
      width: 800px;
    }

    > span {
      text-transform: uppercase;
    }
  }

  &__description {
    display: none;

    @media (min-width: $screen-l) {
      display: flex;

      &_mobile {
        display: none;
      }
    }
  }
}
</style>
