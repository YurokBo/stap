<template>
  <router-link to="/" class="logo">
    <BaseIcon name="logo" width="88" height="56" class="logo__icon" />
  </router-link>
</template>

<script lang="js">
import BaseIcon from "@/components/Base/BaseIcon.vue";

export default {
  name: "Logo",
  components: { BaseIcon },
}
</script>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
    width: 100%;
    height: 100%;
  }
}
</style>
