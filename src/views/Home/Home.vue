<template>
  <main class="home">
    <Header />
    <div class="home__header-cards">
      <img
        src="@/assets/img/hand-click.png"
        alt="hand"
        class="home__header-cards__img"
      />
      <div class="wrap home__header-cards__wrap">
        <HeaderCards class="home__header-cards__cards" />
      </div>
    </div>
    <About />
    <HowWorks />
    <Description />
    <Benefits />
    <Modules />
  </main>
</template>

<script>
import HeaderCards from "@/views/Home/components/Header/HeaderCards.vue";

export default {
  name: "Home",
  components: {
    HeaderCards,
    Benefits: () => import("@/views/Home/components/Benefits/Benefits.vue"),
    Description: () =>
      import("@/views/Home/components/Description/Description.vue"),
    HowWorks: () => import("@/views/Home/components/HowWorks/HowWorks.vue"),
    About: () => import("@/views/Home/components/About/About.vue"),
    Header: () => import("@/views/Home/components/Header/Header.vue"),
    Modules: () => import("@/views/Home/components/Modules/Modules.vue"),
  },
};
</script>
<style lang="scss">
.home {
  &__header-cards {
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
