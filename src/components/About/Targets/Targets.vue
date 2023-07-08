<template>
  <div class="targets">
    <h2 class="title title_h2 colored-el targets__title">
      наша цель
      <BaseLine
        divide-line="divide-line-targets"
        class="targets__divide-line"
      />
    </h2>
    <p class="subtitle">
      помочь компаниям сократить расходы, повысив эффективность бизнес -
      процессов за счет замены:
    </p>
    <div class="targets__rows">
      <TargetsRow
        v-for="({ textLeft, textRight }, i) in rows"
        :key="i"
        :text-right="textRight"
        :text-left="textLeft"
      />
    </div>
  </div>
</template>

<script lang="js">
import TargetsRow from "@/components/About/Targets/TargetsRow.vue";
import BaseLine from "@/components/Base/BaseLine.vue";

export default {
  name: 'Targets',
  components: { BaseLine, TargetsRow },
  data: () => ({
    rows: [
      { textLeft: 'хаотичных процессов', textRight: 'оптимальными' },
      { textLeft: 'ручного труда', textRight: 'автоматизированным' },
      { textLeft: 'бумажного делопроизводстваа', textRight: 'электронным документооборотом' },
      { textLeft: 'архивов и Excel', textRight: 'Единой Базой Данных' },
      {
        textLeft: 'эл. почты и месенджеров',
        textRight: 'более эффективными и современнми средствами обмена информацией и деловой коммуникации'
      },
    ]
  })
}
</script>

<style lang="scss">
.targets {
  padding: 0 0 20px 55px;

  &__title {
    position: relative;
  }

  &__divide-line {
    position: absolute;
    bottom: -30px;
    right: 0;
    width: 100%;
  }

  .subtitle {
    margin: 51px 0 24px;
  }

  &__rows {
    display: flex;
    flex-direction: column;
    padding-right: 7px;
  }
}
</style>
