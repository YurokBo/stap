<template>
  <div
    class="text_large base-tab"
    :class="{ 'base-tab_active': isCurrentTub(tab) }"
    v-html="content"
    @click="$emit('change-tab', tab)"
  />
</template>

<script lang="js">
export default {
  name: 'BaseTabs',
  props: {
    content: {
      type: String,
      default: '',
    },
    currentTab: {
      type: Number,
      default: 1,
    },
    tab: {
      type: Number,
      default: 1,
    }
  },
  methods: {
    isCurrentTub (count) {
      return count === this.currentTab;
    },
  }
}
</script>

<style lang="scss">
.base-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 494px;
  height: 111px;
  padding: 20px 20px;
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

  &:hover {
    color: var(--color-text-black);
    background-color: var(--color-bg-light-blue);
  }
}
</style>
