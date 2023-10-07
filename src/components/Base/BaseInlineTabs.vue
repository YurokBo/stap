<template>
  <div class="inline-tabs">
    <label
      v-for="({ label, isChecked, id }, i) in tabs"
      :key="i"
      class="inline-tabs__tab"
      :for="id"
      @click="$emit('content', i)"
    >
      <input
        type="radio"
        :name="`tab-${tabName}`"
        :id="id"
        :checked="isChecked"
      />
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script lang="js">
export default {
  name: "BaseInlineTabs",
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    tabName: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="scss">
.inline-tabs {
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  //@media (min-width: $screen-l) {
  //  justify-content: center;
  //}

  &__tab {
    //flex-grow: 1;
    text-align: center;
    font-size: 16px;

    @media (min-width: $screen-l) {
      font-size: 32px;
    }

    > input {
      position: absolute;
      opacity: 0;
      margin: 0;
      padding: 0;
      border: none;
    }

    > span {
      position: relative;
      display: block;
      //width: 100%;
      padding: 8px;
      cursor: pointer;
      //white-space: nowrap;
      overflow: hidden;
      //width: 20px;
      //text-overflow: clip;

      @media (min-width: $screen-l) {
        padding: 16px;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--color-border-focus);
        transform: rotateY(90deg);
        transition: all 0.3s ease-in-out;
      }
    }

    input:checked + span {
      font-weight: 500;

      &:after {
        //width: 100%;
        transform: rotateY(180deg);
      }
    }
  }
}
</style>
