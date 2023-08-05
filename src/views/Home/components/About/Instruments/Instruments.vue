<template>
  <div class="instruments">
    <h2 class="title title_h2 colored-el instruments__title">
      наши инстументы
      <BaseLine
        divide-line="divide-line-instruments"
        class="instruments__divide-line"
      />
    </h2>
    <div class="instruments__content">
      <div class="instruments__cards">
        <InstrumentsCard
          v-for="(text, i) in instruments"
          :key="i"
          :icon="`card${i + 1}`"
          :text="text"
          class="instruments__card"
        />
      </div>
      <BaseButton />
    </div>
  </div>
</template>

<script lang="js">
import BaseLine from "@/components/Base/BaseLine.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import InstrumentsCard from "@/views/Home/components/About/Instruments/InstrumentsCard.vue";

export default {
  name: 'Instruments',
  components: { InstrumentsCard, BaseButton, BaseLine },
  data: () => ({
    instruments: [
      'сильная методология бизнес-процессов',
      'многолетний опыт <br />в автоматизации',
      'автоматизированные информационные системы',
    ]
  }),
}
</script>

<style lang="scss">
.instruments {
  padding: 20px 0 0 55px;

  &__title {
    position: relative;
    margin-bottom: 86px;
  }

  &__divide-line {
    position: absolute;
    bottom: -30px;
    right: 0;
    width: 100%;
  }

  &__cards {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 36px;
    margin-bottom: 64px;
    padding: 0 55px 0 0;
  }

  &__card {
    width: 100%;
  }
}
</style>
