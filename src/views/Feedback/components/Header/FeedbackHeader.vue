<template>
  <section class="feedback-header">
    <div class="wrap">
      <div class="feedback-header__inner">
        <h1 class="title title_h2 feedback-header__title">
          <span class="colored-el">Бесплатная диагностика</span><br />
          вашей компании
          <BaseLine
            path="feedback-header/divide-line-feedback-header"
            class="feedback-header__divide-line"
          />
        </h1>
        <BasePeriod text="Онлайн 30-50 минут" />
        <p class="feedback-header__text">
          Что вы получите от встречи с экспертом STAP:
        </p>
        <FeedbackHeaderList class="feedback-header__list"/>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from '@/components/Base/BaseLine.vue';
import BasePeriod from '@/components/Base/BasePeriod.vue';
import FeedbackHeaderList from '@/views/Feedback/components/Header/FeedbackHeaderList.vue';

export default {
  name: 'FeedbackHeader',
  components: { FeedbackHeaderList, BasePeriod, BaseLine },
};
</script>

<style lang="scss">
.feedback-header {
  padding: 111px 0 0;

  &__inner {
    position: relative;
    padding: 25px 13px 105px 30px;
    background-image: url(~@/assets/img/common-hero-bg-mob2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;

    @media (min-width: $screen-l) {
      padding: 55px 31px 93px 51px;
      background-image: url(~@/assets/img/common-hero-bg.png);
    }
  }

  &__title {
    position: relative;
    margin-bottom: 35px;
    font-size: 20px;

    @media (min-width: $screen-l) {
      font-size: 42px;
    }
  }

  .base-period {
    position: absolute;
    bottom: 52px;
    left: 30px;

    @media (min-width: $screen-l) {
      top: 69px;
      right: 91px;
      bottom: unset;
      left: unset;
    }
  }

  &__divide-line {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
    }
  }

  &__text {
    font-size: 16px;
    font-weight: 300;

    @media (min-width: $screen-l) {
      margin-bottom: 29px;
      font-size: 32px;
    }
  }

  &__list {
    display: none;
    @media (min-width: $screen-l) {
      display: block;
    }
  }
}
</style>
