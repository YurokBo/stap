<template>
  <div class="nav-menu" :class="{ 'nav-menu_bg': isScrolled }">
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
    isScrolled: false,
    navLinks: [
      {title: 'меню1', link: ''},
      {title: 'меню2', link: ''},
      {title: 'меню3', link: ''},
    ]
  }),
  mounted() {
    if (window.scrollY > 1) this.isScrolled = true;
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 1;
    },
  }
};
</script>

<style lang="scss">
.nav-menu {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 77px;
  }

  &_bg {
    background-color: var(--color-dark-blue);
    box-shadow: 0 6px 6px rgba(122, 208, 255, 0.9);
  }
}
</style>
