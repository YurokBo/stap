<template>
  <div class="home">
    <Header />
    <About />
  </div>
</template>

<script>
import Header from "@/views/Home/components/Header/Header.vue";
import About from "@/views/Home/components/About/About.vue";
export default {
  name: "Home",
  components: {
    About,
    Header,
  },
};
</script>
