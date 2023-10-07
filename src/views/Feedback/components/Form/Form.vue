<template>
  <section class="form">
    <div class="wrap form__wrap">
      <div class="form__inner">
        <img src="@/assets/img/form/ufo.png" alt="image" class="form__img" />
        <h2 class="title title_h2 form__title">
          <span class="colored-el">Кому нужна</span><br />
          диагностика бизнеса<span class="colored-el">?</span>
          <BaseLine
            path="form/divide-line-form"
            class="form__divide-line"
          />
          <BaseLine
            path="form/divide-line-form-mobile"
            class="form__divide-line_mobile"
          />
        </h2>
        <p class="text form__subtitle">
          Всем, кто хочет
          <span class="text_bold"> работать эффективно и снижать расходы </span>
        </p>
        <div class="form__text-items">
          <p class="text_large text_bold form__item">
            Проводим только
            <span class="colored-el">4 бесплатных диагностики в месяц,</span>
            1 раз в неделю:
          </p>
          <p class="text text_medium form__item">
            время компетентных специалистов, способных провести грамотную
            оценку бизнеса в отношении автоматизации, на вес золота.
          </p>
          <p class="text_large text_bold form__item form__item_bg">
            В STAP работают 2 таких эксперта:
          </p>
        </div>
        <FormBlock />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from "@/components/Base/BaseLine.vue";
import FormBlock from "@/views/Feedback/components/Form/FormBlock.vue";

export default {
  name: 'Form',
  components: { FormBlock, BaseLine }
}
</script>

<style lang="scss">
.form {
  &__inner {
    position: relative;

    @media (min-width: $screen-l) {
      padding: 65px 3px 81px 51px;
      background-image: url(~@/assets/img/form/form-bg.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
  }

  &__img {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;

    }
  }

  &__title {
    margin-bottom: 61px;
  }

  &__divide-line {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
      z-index: 1;
    }

    &_mobile {
      z-index: 1;
      //margin-top: -13px; TODO переделать
      margin-top: 10px;

      @media (min-width: $screen-l) {
        display: none;
      }
    }
  }

  &__subtitle {
    margin-bottom: 37px;
    font-size: 18px;

    @media (min-width: $screen-l) {
      margin-bottom: 54px;
      font-size: 32px;
    }
  }

  &__text-items {
    display: flex;
    flex-direction: column;
    margin-bottom: 47px;

    @media (min-width: $screen-l) {
      display: grid;
      grid-template-columns: 415px 590px;
      margin-bottom: 32px;
    }
  }

  &__item {
    margin-bottom: 35px;
    @media (min-width: $screen-l) {
      padding: 17px 29px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &_bg {
      @media (min-width: $screen-l) {
        border-radius: 10px;
        background: var(--color-bg-dark-blue);
      }
    }
  }
}
</style>
