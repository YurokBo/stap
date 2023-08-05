<template>
  <div class="home">
    <Header />
    <About />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import About from "@/components/About/About.vue";
export default {
  name: "Home",
  components: {
    About,
    Header,
  },
};
</script>
