<template>
  <section class="about">
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
      <AboutDescription />
      <BaseButton />
    </div>
  </section>
</template>

<script lang="js">

import BaseButton from "@/components/Base/BaseButton.vue";
import AboutDescription from "@/views/Home/components/About/AboutDescription.vue";

export default {
  name: 'About',
  components: { AboutDescription, BaseButton },
  data: () => ({
    digits: ['left', 'right']
  })
};
</script>

<style lang="scss">
.about {
  position: relative;
  padding: 82px 0 0;

  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__digits {
    position: absolute;
    top: -50px;
    z-index: -1;

    &_left {
      left: 0;
    }

    &_right {
      right: 0;
    }
  }

  &__title {
    width: 800px;
    margin: 0 auto;
    text-align: center;

    > span {
      text-transform: uppercase;
    }
  }
}
</style>
