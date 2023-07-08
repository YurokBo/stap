<template>
  <main id="app">
    <NavMenu />
    <Header />
    <About />
  </main>
</template>

<script>
import NavMenu from "@/components/Navigation/NavMenu.vue";
import Header from "@/components/Header/Header.vue";
import About from "@/components/About/About.vue";

export default {
  name: "App",
  components: { About, Header, NavMenu },
};
</script>

<style lang="scss"></style>
