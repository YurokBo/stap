<template>
  <div class="description-card">
    <img
      :src="require(`@/assets/img/description/${icon}.png`)"
      :alt="icon"
      class="description-card__icon"
    />
    <p class="text" v-html="text" />
  </div>
</template>

<script lang="js">
export default {
  name: 'DescriptionCard',
  props: {
    icon: {
      type: String,
      required: '',
    },
    text: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="scss">
.description-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;

  @media (min-width: $screen-l) {
    padding: 53px 25px 57px;
    background-image: url(~@/assets/img/common-card-bg.png);
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 100%;
  }

  &__icon {
    width: 77px;
    height: 75px;
    margin-bottom: 35px;

    @media (min-width: $screen-l) {
      width: 124px;
      height: 120px;
      margin-bottom: 44px;
    }
  }
}
</style>
