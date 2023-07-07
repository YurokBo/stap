<template>
  <nav class="nav-links">
    <div
      v-for="({ title, link }, i) in navLinks"
      :key="i"
      class="nav-links__link"
    >
      {{ title }}
    </div>
  </nav>
</template>

<script lang="js">
export default {
  name: "NavLinks",
  data: () => ({
    navLinks: [
      { title: "меню1", link: "" },
      { title: "меню2", link: "" },
      { title: "меню3", link: "" },
      { title: "меню4", link: "" },
      { title: "меню5", link: "" },
    ],
  }),
};
</script>

<style lang="scss">
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 123px;
    padding: 10px 30px;
    font-family: "Stem", sans-serif;
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
</style>
