<template>
  <div class="description-card">
    <img
      src="@/assets/img/common-card-bg.png"
      alt="card background"
      class="description-card__bg"
    />
    <div class="description-card__content">
      <img
        :src="require(`@/assets/img/description/${icon}.png`)"
        :alt="icon"
        class="description-card__icon"
      />
      <p class="text text_large" v-html="text" />
    </div>
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
  position: relative;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 53px 25px 57px;
  }

  &__icon {
    width: 124px;
    height: 120px;
    margin-bottom: 44px;
  }
}
</style>
