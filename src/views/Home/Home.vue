<template>
  <main class="home">
    <Hero />
    <div class="home__hero-cards">
      <img
        src="@/assets/img/hand-click.png"
        alt="hand"
        class="home__hero-cards__img"
      />
      <div class="wrap home__hero-cards__wrap">
        <HeroCards class="home__hero-cards__cards" />
      </div>
    </div>
    <About />
    <HowWorks />
    <Description />
    <Benefits />
    <Modules />
    <Legal />
  </main>
</template>

<script>
import HeroCards from "@/views/Home/components/Hero/HeroCards.vue";

export default {
  name: "Home",
  components: {
    HeroCards,
    Benefits: () => import("@/views/Home/components/Benefits/Benefits.vue"),
    Description: () =>
      import("@/views/Home/components/Description/Description.vue"),
    HowWorks: () => import("@/views/Home/components/HowWorks/HowWorks.vue"),
    About: () => import("@/views/Home/components/About/About.vue"),
    Hero: () => import("@/views/Home/components/Hero/Hero.vue"),
    Modules: () => import("@/views/Home/components/Modules/Modules.vue"),
    Legal: () => import("@/views/Home/components/Legal/Legal.vue"),
  },
};
</script>
<style lang="scss">
.home {
  &__hero-cards {
    position: relative;

    @media (min-width: $screen-l) {
      display: none;
    }

    &__wrap {
      padding: 40px 16px 40px 127px;
    }

    &__img {
      position: absolute;
      top: 10px;
      left: 0;
      width: 190px;
    }
  }
}
</style>
