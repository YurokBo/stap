<template>
  <footer class="footer">
    <div class="wrap footer__wrap">
      <div class="footer__content">
        <Logo class="footer__logo" />
        <RequisitesText class="footer__requisites-text" />
        <FooterSocials
          v-for="({ href, icon }, i) in links"
          :key="i"
          :href="href"
          :icon="icon"
          class="footer__socials_mobile"
        />
      </div>
      <RequisitesText class="footer__requisites-text_mobile" />
      <div class="footer__links">
        <FooterSocials
          v-for="({ href, icon }, i) in links"
          :key="i"
          :href="href"
          :icon="icon"
          class="footer__socials"
        />
        <router-link to="/" class="footer__links__policy">
          Политика конфиденциальности
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script lang="js">
import Logo from "@/components/Logo/Logo.vue";
import RequisitesText from "@/components/RequisitesText/RequisitesText.vue";
import FooterSocials from "@/components/Footer/FooterSocials.vue";

export default {
  name: 'Footer',
  components: { FooterSocials, RequisitesText, Logo },
  data: () => ({
    links: [
      {icon: 'vk', href: '#'},
      {icon: 'tg', href: '#'},
      {icon: 'in', href: '#'},
    ]
  })
}
</script>

<style lang="scss">
.footer {
  padding: 40px 9px;
  font-weight: 400;
  color: var(--color-text-grey);

  @media (min-width: $screen-l) {
    padding: 60px 0;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: $screen-l) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__content,
  &__links {
    display: flex;
    align-items: center;
  }

  &__content {
    justify-content: space-between;
    margin-bottom: 51px;

    @media (min-width: $screen-l) {
      justify-content: initial;
      margin-bottom: 0;
    }
  }

  &__logo {
    margin-right: 52px;
  }

  &__links {
    &__policy {
      font-size: 14px;
      @media (min-width: $screen-l) {
        margin-left: 53px;
      }
    }
  }

  &__requisites-text {
    display: none;
    @media (min-width: $screen-l) {
      display: block;
    }

    &_mobile {
      margin-bottom: 32px;

      @media (min-width: $screen-l) {
        display: none;
        margin-bottom: 0;
      }
    }
  }

  &__socials {
    display: none;
    @media (min-width: $screen-l) {
      display: block;
    }

    &_mobile {
      @media (min-width: $screen-l) {
        display: none;
      }
    }
  }
}
</style>
