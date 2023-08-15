<template>
  <div class="home">
    <Header />
    <!--    <About />-->
    <!--    <HowWorks />-->
    <!--    <Description />-->
    <!--    <Benefits />-->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // Benefits: () => import("@/views/Home/components/Benefits/Benefits.vue"),
    // Description: () =>
    //   import("@/views/Home/components/Description/Description.vue"),
    // HowWorks: () => import("@/views/Home/components/HowWorks/HowWorks.vue"),
    // About: () => import("@/views/Home/components/About/About.vue"),
    Header: () => import("@/views/Home/components/Header/Header.vue"),
  },
};
</script>
