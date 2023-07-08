<template>
  <div id="app">
    <NavMenu />
    <Header />
  </div>
</template>

<script>
import NavMenu from "@/components/Navigation/NavMenu.vue";
import Header from "@/components/Header/Header.vue";

export default {
  name: "App",
  components: { Header, NavMenu },
};
</script>

<style lang="scss"></style>
