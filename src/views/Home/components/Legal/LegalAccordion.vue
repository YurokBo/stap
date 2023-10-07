<template>
  <div class="legal-accordion">
    <button
      class="text_large legal-accordion__head"
      :class="{ 'legal-accordion__head_active': isOpen }"
      v-html="title"
      @click="isOpen = !isOpen"
    />
    <transition name="slide-fade">
      <div v-show="isOpen" class="legal-accordion__body">
        <BaseListItem v-for="(item, i) in content" :key="i" :text="item" />
      </div>
    </transition>
  </div>
</template>

<script lang="js">
import BaseListItem from "@/components/Base/BaseListItem.vue";

export default {
  name: 'LegalAccordion',
  components: { BaseListItem },
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
      isOpen: false,
  }),
}
</script>

<style lang="scss">
.legal-accordion {
  @media (min-width: $screen-l) {
    display: none;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &__head {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 10px 10px;
    font-family: $font-family-micra;
    font-weight: 400;
    text-align: center;
    line-height: 1.75;
    color: var(--color-text-tab);
    border-radius: 10px;
    border: 2px solid var(--color-border);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &_active {
      color: var(--color-text-black);
      background-color: var(--color-bg-light-blue);
    }
  }

  &__body {
    display: flex;
    gap: 13px;
    padding: 24px 13px 28px 30px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__item {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 14px;

    &:first-child {
      margin-top: 6px;
    }
  }
}
</style>
