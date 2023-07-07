<template>
  <div class="nav-menu">
    <div class="nav-menu__wrap">
      <Logo />
      <NavLinks />
    </div>
  </div>
</template>

<script lang="js">
import Logo from "@/components/Navigation/Logo.vue";
import NavLinks from "@/components/Navigation/NavLinks.vue";

export default {
  name: 'NavMenu',
  components: { NavLinks, Logo },
  data: () => ({
    navLinks: [
      {title: 'меню1', link: ''},
      {title: 'меню2', link: ''},
      {title: 'меню3', link: ''},
    ]
  }),
};
</script>

<style lang="scss">
.nav-menu {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 0;

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 77px;
  }
}
</style>
