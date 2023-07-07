<template>
  <button class="base-button">
    <span>
      Заказать бесплатную <br />
      диагностику компании
    </span>
    <span class="base-button__img">
      <img src="@/assets/img/fingerprint.png" alt="fingerprint" />
    </span>
    <img src="@/assets/img/shine.png" alt="shine" class="base-button__shine" />
  </button>
</template>

<script lang="js">
export default {
  name: 'BaseButton',
}
</script>

<style lang="scss">
.base-button {
  position: relative;
  padding: 25.5px 133px 25.5px 60px;
  font-family: "Micra", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-text-white);
  border-radius: 1000px;
  background-image: url("~@/assets/img/button-border.svg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;

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
