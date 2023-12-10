<template>
  <header class="nav-menu" :class="{ 'nav-menu_bg': isScrolled }">
    <div class="wrap nav-menu__wrap">
      <div class="nav-menu__logo">
        <Logo />
        <NavText class="nav-menu__text" />
      </div>
      <NavLinks class="nav-menu__links" />
      <button
        class="nav-menu__btn"
        :class="{ 'nav-menu__btn_active': isOpen }"
        @click="openMobileMenu"
      >
        <span /><span /><span />
      </button>
    </div>
    <NavMenuMobile
      :class="{ 'nav-menu-mobile_active': isOpen }"
      @closeMenu="openMobileMenu"
    />
  </header>
</template>

<script lang="js">
import Logo from '@/components/Logo/Logo.vue';
import NavLinks from '@/components/Navigation/NavLinks.vue';
import NavText from '@/components/Navigation/NavText.vue';
import NavMenuMobile from '@/components/Navigation/NavMenuMobile.vue';

export default {
  name: 'NavMenu',
  components: { NavMenuMobile, NavText, NavLinks, Logo },
  data: () => ({
    isScrolled: false,
    isOpen: false,
  }),
  mounted() {
    if (window.scrollY > 1) this.isScrolled = true;
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 1;
    },
    openMobileMenu() {
      this.isOpen = !this.isOpen;
      const body = document.querySelector('body')
      body.style.overflow = this.isOpen ? 'hidden' : '';
    }
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

  &__logo {
    display: flex;
    align-items: center;
    gap: 23px;
  }

  &__links {
    display: none;

    @media (min-width: $screen-l) {
      display: flex;
    }
  }

  &__text {
    @media (min-width: $screen-l) {
      display: none;
    }
  }

  &__btn {
    position: relative;
    width: 48px;
    height: 48px;
    padding: 10px 6px;

    @media (min-width: $screen-l) {
      display: none;
    }

    &_active {
      & > span {
        &:first-child {
          top: 23px !important;
          transform: rotateZ(-45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:last-child {
          bottom: 21px !important;
          transform: rotateZ(45deg);
          width: 36px !important;
        }
      }
    }

    > span {
      position: absolute;
      right: 6px;
      height: 4px;
      border-radius: 1000px;
      background-color: var(--color-light-blue);
      transition: all 0.3s ease-in-out;

      &:first-child {
        top: 10px;
        width: 36px;
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
      }

      &:last-child {
        bottom: 10px;
        width: 14px;
      }
    }
  }
}
</style>
