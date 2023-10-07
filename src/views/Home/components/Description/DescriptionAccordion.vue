<template>
  <div class="description-accordion">
    <button
      class="text_large description-accordion__head"
      :class="{ 'description-accordion__head_active': isOpen }"
      v-html="title"
      @click="isOpen = !isOpen"
    />
    <transition name="slide-fade">
      <div v-show="isOpen" class="description-accordion__body">
        <img
          src="@/assets/img/description/ruler-small.svg"
          alt="ruler"
          class="description-accordion__ruler"
        />
        <ul class="description-accordion__list">
          <li
            v-for="(item, i) in content"
            :key="i"
            class="description-accordion__item"
          >
            <BaseNumber :is-size-large="false" :number="i + 1" />
            <p class="text">
              {{ item }}
            </p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="js">
import BaseNumber from "@/components/Base/BaseNumber.vue";

export default {
  name: 'DescriptionAccordion',
  components: { BaseNumber },
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
.description-accordion {
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
