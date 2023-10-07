<template>
  <div class="nav-menu-mobile">
    <div class="wrap">
      <NavLinks
        class="nav-menu-mobile__links"
        @closeMenu="$emit('closeMenu')"
      />
    </div>
  </div>
</template>

<script lang="js">
import NavLinks from "@/components/Navigation/NavLinks.vue";

export default {
  name: 'NavMenuMobile',
  components: { NavLinks }
}
</script>

<style lang="scss">
.nav-menu-mobile {
  position: absolute;
  top: 0;
  right: -100%;
  z-index: 998;
  width: 100%;
  height: 100vh;
  margin-top: 95px;
  background-color: var(--color-bg-mobile-menu);
  transition: all 0.3s ease-in-out;

  &_active {
    right: 0;
  }

  @media (min-width: $screen-l) {
    display: none;
  }

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 20px;
    font-weight: 300;

    .nav-links__link {
      width: 100%;
      padding: 29px 0 26px;
      border-bottom: 1px solid var(--color-border-link-hover);
      &:active {
        font-weight: 500;
      }
    }
  }
}
</style>
