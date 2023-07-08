<template>
  <div class="instruments-card">
    <img
      src="@/assets/img/common-card-bg.png"
      alt="card background"
      class="instruments-card__bg"
    />
    <div class="instruments-card__content">
      <img
        :src="require(`@/assets/img/instruments/${icon}.svg`)"
        :alt="icon"
        class="instruments-card__icon"
      />
      <p class="text text_large" v-html="text" />
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'InstrumentsCard',
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="scss">
.instruments-card {
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
    padding: 40px 18px 47px;
  }

  &__icon {
    width: 102px;
    height: 100px;
    margin-bottom: 33px;
  }
}
</style>
