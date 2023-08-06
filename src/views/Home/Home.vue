<template>
  <div class="home">
    <Header />
    <About />
    <HowWorks />
  </div>
</template>

<script>
import Header from "@/views/Home/components/Header/Header.vue";
import About from "@/views/Home/components/About/About.vue";
import HowWorks from "@/views/Home/components/HowWorks/HowWorks.vue";
export default {
  name: "Home",
  components: {
    HowWorks,
    About,
    Header,
  },
};
</script>
