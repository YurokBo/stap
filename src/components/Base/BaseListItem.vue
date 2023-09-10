<template>
  <div class="base-list-item">
    <img
      src="@/assets/img/icons/arrow-right.svg"
      alt="arrow right"
      class="base-list-item__arrow"
    />
    <img
      src="@/assets/img/icons/arrow-right-small.svg"
      alt="arrow right"
      class="base-list-item__arrow_mobile"
    />
    <p v-html="text" class="text" />
  </div>
</template>

<script lang="js">
export default {
  name: 'BaseListItem',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.base-list-item {
  display: flex;
  align-items: center;
  font-size: 14px;

  @media (min-width: $screen-m) {
    font-size: 20px;
  }

  &__arrow {
    display: none;

    @media (min-width: $screen-m) {
      display: block;
      margin-right: 32px;
    }

    &_mobile {
      margin-right: 21px;

      @media (min-width: $screen-m) {
        display: none;
        margin-right: 0;
      }
    }
  }
}
</style>
