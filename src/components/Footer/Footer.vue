<template>
  <footer class="footer">
    <div class="wrap footer__wrap">
      <div class="footer__content">
        <Logo class="footer__logo" />
        <RequisitesText />
      </div>
      <div class="footer__links">
        <a
          v-for="(link, i) in links"
          :key="i"
          :href="link.link"
          target="_blank"
          class="footer__links__social"
        >
          <img
            :src="require(`@/assets/img/icons/${link.icon}.png`)"
            alt="social icon"
          />
        </a>
        <router-link to="/" class="text_small text_small footer__links__policy">
          Политика конфиденциальности
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script lang="js">
import Logo from "@/components/Logo/Logo.vue";
import RequisitesText from "@/components/RequisitesText/RequisitesText.vue";

export default {
  name: 'Footer',
  components: { RequisitesText, Logo },
  data: () => ({
    links: [
      {icon: 'vk', link: '#'},
      {icon: 'tg', link: '#'},
      {icon: 'in', link: '#'},
    ]
  })
}
</script>

<style lang="scss">
.footer {
  padding: 60px 0;
  font-weight: 400;
  color: var(--color-text-grey);

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content,
  &__links {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 52px;
  }

  &__links {
    &__social {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;

      &:not(:first-child) {
        margin-left: 21px;
      }
    }

    &__policy {
      margin-left: 53px;
    }
  }
}
</style>
