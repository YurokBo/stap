<template>
  <div id="app">
    <NavMenu />
    <router-view />
    <!--    <Footer />-->
  </div>
</template>

<script lang="js">
import NavMenu from "@/components/Navigation/NavMenu.vue";
// import Footer from "@/components/Footer/Footer.vue";
export default {
  name: 'App',
  components: { /*Footer, */NavMenu },
}
</script>
