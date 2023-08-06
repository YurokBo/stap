<template>
  <header class="feedback-header">
    <div class="wrap">
      <div class="feedback-header__inner">
        <img
          src="@/assets/img/common-header-bg.png"
          class="feedback-header__bg"
        />
        <h1 class="title title_h2 feedback-header__title">
          <span class="colored-el">Бесплатная диагностика</span><br />
          вашей компании
          <BasePeriod text="Онлайн 30-50 минут" />
          <BaseLine
            path="feedback-header/divide-line-feedback-header"
            class="feedback-header__divide-line"
          />
        </h1>
        <p class="feedback-header__text">
          Что вы получите от встречи с экспертом STAP:
        </p>
        <div class="feedback-header__list">
          <div
            v-for="(row, i) in list"
            :key="i"
            class="feedback-header__list__row"
          >
            <BaseListItem v-for="(item, i) in row" :key="i" :text="item" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="js">
import BaseLine from "@/components/Base/BaseLine.vue";
import BasePeriod from "@/components/Base/BasePeriod.vue";
import BaseListItem from "@/components/Base/BaseListItem.vue";

export default {
  name: 'FeedbackHeader',
  components: { BaseListItem, BasePeriod, BaseLine },
  data: () => ({
    list: [
      [
        'Сколько денег вы можете сэкономить от внедрения автоматизации',
        'Сколько денег вы можете сэкономить от внедрения автоматизации'
      ],
      [
        'Что можно сделать прямо сейчас для увеличения скорости работы и улучшения показателей в компании, еще БЕЗ автоматизации',
        'Что можно сделать прямо сейчас для увеличения скорости работы и улучшения показателей в компании, еще БЕЗ автоматизации',
      ],
      [
        'Узнаете уровень автоматизации компании по шкале от 1 до 10',
        'Узнаете уровень автоматизации компании по шкале от 1 до 10'
      ]
    ]
  })
}
</script>

<style lang="scss">
.feedback-header {
  padding: 111px 0 0;

  &__inner {
    position: relative;
    padding: 55px 31px 93px 51px;
  }

  &__bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__title {
    position: relative;
    margin-bottom: 35px;

    .base-period {
      position: absolute;
      top: 10px;
      right: 91px;
    }
  }

  &__text {
    margin-bottom: 29px;
    font-size: 32px;
    font-weight: 300;
  }

  &__list {
    &__row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 42px;
      padding: 24px 25px;

      &:nth-child(2n) {
        border-radius: 10px;
        background: var(--color-bg-dark-blue);
      }
    }
  }
}
</style>
