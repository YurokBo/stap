<template>
  <router-link
    to="/feedback"
    class="base-button"
    :class="{ 'base-button_padding': !isFingerPrint }"
  >
    <img
      src="@/assets/img/button-border.png"
      alt="border"
      class="base-button__border"
    />
    <p v-html="text" class="base-button__text" />
    <span v-if="isFingerPrint" class="base-button__img">
      <img src="@/assets/img/fingerprint.png" alt="fingerprint" />
    </span>
    <img
      v-if="isShine"
      src="@/assets/img/shine.png"
      alt="shine"
      class="base-button__shine"
    />
  </router-link>
</template>

<script lang="js">
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Заказать бесплатную <br />диагностику компании'
    },
    isFingerPrint: {
      type: Boolean,
      default: true,
    },
    isShine: {
      type: Boolean,
      default: true,
    },
  }
}
</script>

<style lang="scss">
.base-button {
  position: relative;
  padding: 25.5px 133px 25.5px 60px;
  font-family: $font-family-micra;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-text-white);
  border-radius: 1000px;
  transition: all 0.3s ease-in-out;

  &_padding {
    padding: 16px 49px 12px;
  }

  &__border {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__text {
    text-align: center;
  }

  &:hover {
    .base-button__shine {
      bottom: -72px;
      scale: 0.85;
    }
  }

  &__img {
    position: absolute;
    top: 50%;
    right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    transform: translateY(-50%);
    background: var(--color-button-gradient);
    border-radius: 50%;

    > img {
      width: 50px;
      height: 50px;
    }
  }

  &__shine {
    position: absolute;
    bottom: -73px;
    left: -91px;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }
}
</style>
