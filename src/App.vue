<template>
  <div id="app">
    <NavMenu />
    <router-view />
  </div>
</template>

<script lang="js">
import NavMenu from "@/components/Navigation/NavMenu.vue";
export default {
  name: 'App',
  components: { NavMenu },
}
</script>
