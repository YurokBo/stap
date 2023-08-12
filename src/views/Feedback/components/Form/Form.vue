<template>
  <section class="form">
    <div class="wrap form__wrap">
      <div class="form__inner">
        <img
          src="@/assets/img/form/form-bg.png"
          alt="background"
          class="form__bg"
        />
        <img src="@/assets/img/form/ufo.png" alt="image" class="form__img" />
        <h2 class="title title_h2 form__title">
          <span class="colored-el">Кому нужна</span><br />
          диагностика бизнеса<span class="colored-el">?</span>
          <BaseLine path="form/divide-line-form" />
        </h2>
        <p class="text form__subtitle">
          Всем, кто хочет
          <span class="text_bold"> работать эффективно и снижать расходы </span>
        </p>
        <div class="form__text-items">
          <div class="form__text-items__item">
            <p class="text_large text_bold">
              Проводим только
              <span class="colored-el">4 бесплатных диагностики в месяц,</span>
              1 раз в неделю:
            </p>
            <p class="text_large text_bold form__text-items__item_bg">
              В STAP работают 2 таких эксперта:
            </p>
          </div>
          <div class="form__text-items__item">
            <p class="text text_medium">
              время компетентных специалистов, способных провести грамотную
              оценку бизнеса в отношении автоматизации, на вес золота.
            </p>
          </div>
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
    padding: 65px 3px 81px 51px;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  &__title {
    margin-bottom: 61px;
  }

  &__subtitle {
    margin-bottom: 54px;
    font-size: 32px;
  }

  &__text-items {
    display: grid;
    grid-template-columns: 415px 590px;
    margin-bottom: 32px;

    &__item {
      > p {
        padding: 17px 29px;
      }

      &_bg {
        border-radius: 10px;
        background: var(--color-bg-dark-blue);
      }
    }
  }
}
</style>
