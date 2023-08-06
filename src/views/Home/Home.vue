<template>
  <div class="home">
    <Header />
    <About />
    <HowWorks />
    <Description />
  </div>
</template>

<script>
import Header from "@/views/Home/components/Header/Header.vue";
import About from "@/views/Home/components/About/About.vue";
import HowWorks from "@/views/Home/components/HowWorks/HowWorks.vue";
import Description from "@/views/Home/components/Description/Description.vue";
export default {
  name: "Home",
  components: {
    Description,
    HowWorks,
    About,
    Header,
  },
};
</script>
