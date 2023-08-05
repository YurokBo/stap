<template>
  <section class="about">
    <div class="wrap about__wrap">
      <p class="text_large text_bold about__title">
        <span class="colored-el">АИСОТ</span> - Это решения для автоматизации
        процессов охраны труда, промышленной и пожарной безопасности, экологии и
        других взамосвязанных направлений
      </p>
    </div>
  </section>
</template>

<script lang="js">

export default {
  name: 'About',
};
</script>

<style lang="scss">
.about {
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
