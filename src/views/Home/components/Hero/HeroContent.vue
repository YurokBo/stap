<template>
  <div class="hero-content">
    <h1 class="title title_h1 hero-content__title">
      <div class="colored-el">Снижение расходов</div>
      компании на операционную <br />деятельность до
      <span class="colored-el">50%</span><br />
      уже через <span class="colored-el">3</span> месяца
    </h1>
    <p class="subtitle colored-el hero-content__subtitle">
      за счет автоматизации охраны труда
    </p>
    <HeroCards class="hero-content__cards" />
  </div>
</template>

<script lang="js">
import HeroCards from '@/views/Home/components/Hero/HeroCards.vue';

export default {
  name: 'HeroContent',
  components: { HeroCards },
}
</script>

<style lang="scss">
.hero-content {
  &__title {
    margin-bottom: 5px;
    text-align: center;

    @media (min-width: $screen-l) {
      margin-bottom: 21px;
      text-align: left;
    }
  }

  &__subtitle {
    margin-bottom: 354px;
    text-align: center;
    letter-spacing: 0.5px;

    @media (min-width: $screen-l) {
      margin-bottom: 45px;
      text-align: left;
    }
  }

  &__cards {
    display: none;

    @media (min-width: $screen-l) {
      display: grid;
    }
  }
}
</style>
