<template>
  <div class="feedback-header-list">
    <div
      v-for="(row, i) in list"
      :key="i"
      class="feedback-header-list__row"
    >
      <BaseListItem v-for="(item, i) in row" :key="i" :text="item" />
    </div>
  </div>
</template>

<script lang="js">
import BaseListItem from '@/components/Base/BaseListItem.vue';

export default {
  name: 'FeedbackHeaderList',
  components: { BaseListItem },
  data: () => ({
    list: [
      [
        'Сколько денег вы можете сэкономить от внедрения автоматизации',
        'Пройдете тестирование и узнаете, готова ли компания к внедрению автоматизации'
      ],
      [
        'Что можно сделать прямо сейчас для увеличения скорости работы и улучшения показателей в компании, еще БЕЗ автоматизации',
        'Предварительный список необходимых модулей АИСОТ для лучших результатов в компании',
      ],
      [
        'Узнаете уровень автоматизации компании по шкале от 1 до 10',
        'Рассчет стоимости внедрения автоматизации для вас: частично или полностью'
      ]
    ]
  }),
}
</script>

<style lang="scss">
.feedback-header-list {
  &__row {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: $screen-l) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0 147px;
      padding: 24px 25px;
    }

    .base-list-item {
      padding: 24px 25px;
      border-radius: 10px;

      @media (min-width: $screen-l) {
        padding: 0;
        border-radius: 0;
      }

      &:nth-child(2n) {
        background: var(--color-bg-dark-blue);

        @media (min-width: $screen-l) {
          background: none;
        }
      }
    }

    &:nth-child(2n) {
      @media (min-width: $screen-l) {
        border-radius: 10px;
        background: var(--color-bg-dark-blue);
      }
    }
  }
}
</style>
