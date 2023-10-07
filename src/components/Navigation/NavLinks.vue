<template>
  <nav class="nav-links">
    <router-link
      v-for="({ title, link }, i) in navLinks"
      :key="i"
      to="/"
      class="nav-links__link"
      @click.native="scrollFix(`#${link}`)"
    >
      {{ title }}
    </router-link>
  </nav>
</template>

<script lang="js">
export default {
  name: "NavLinks",
  data: () => ({
    navLinks: [
      { title: "Консультация", link: "" },
      { title: "АИСОТ", link: "about" },
      { title: "Как работаем", link: "works" },
      { title: "Преимущества", link: "benefits" },
      { title: "Модули", link: "" },
    ],
  }),
  methods: {
    scrollFix(hash) {
      location.hash = hash;
      this.$emit('closeMenu');
    }
  }
};
</script>

<style lang="scss">
.nav-links {
  justify-content: center;
  align-items: center;

  &__link {
    @media (min-width: $screen-l) {
      position: relative;

      justify-content: center;
      align-items: center;
      min-width: 123px;
      padding: 10px 30px;
      font-size: 14px;
      font-weight: 500;
      color: var(--color-text-grey);
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: 1px solid var(--color-border-link);
        border-radius: 6px;
        transform: skew(20deg);
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        color: var(--color-text-white);
        transition: all 0.3s ease-in-out;

        &:before {
          border: 1px solid var(--color-border-link-hover);
        }
      }

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
}
</style>
