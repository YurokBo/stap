<template>
  <a :href="href" target="_blank" class="footer-social">
    <img
      :src="require(`@/assets/img/icons/${icon}.png`)"
      :alt="`${icon} icon`"
    />
  </a>
</template>

<script lang="js">
export default {
  name: 'FooterSocials',
  props: {
    href: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss">
.footer-social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;

  &:not(:first-child) {
    margin-left: 21px;
  }
}
</style>
