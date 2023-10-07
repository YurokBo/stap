<template>
  <section class="check-list">
    <div class="wrap">
      <h2 class="title title_h1 check-list__title">
        На диагностике вы заберете
        <span class="colored-el">набор чек-листов</span>, которые помогут
        избежать судов:
      </h2>
      <div class="check-list__content">
        <img src="@/assets/img/check-list/ruler.svg" alt="ruler" class="check-list__ruler" />
        <img src="@/assets/img/check-list/ruler-mobile.svg" alt="ruler" class="check-list__ruler_mobile" />
        <div class="check-list__items">
          <div
            v-for="(item, i) in checkList"
            :key="i"
            class="check-list__item"
          >
            <BaseNumber :number="i + 1" is-size-large />
            <p class="text text_medium" v-html="item" />
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/assets/img/check-list/check-list-hand.png"
      alt="check list"
      class="check-list__img"
    />
  </section>
</template>

<script lang="js">
import BaseNumber from "@/components/Base/BaseNumber.vue";

export default {
  name: 'CheckList',
  components: { BaseNumber },
  data: () => ({
    checkList: [
      'Перечень обязательных <span class="text_bold">документов компании</span> по законодательству',
      '<span class="text_bold">Проверка готовности компании</span> к автоматизации',
      'Какие <span class="text_bold">документы по обучению работников</span> можно вести в электронном формате',
      'Какие <span class="text_bold">документы по медосмотрам</span> работников можно вести в электронном формате',
    ]
  })
}
</script>

<style lang="scss">
.check-list {
  position: relative;
  padding: 527px 0 50px;

  @media (min-width: $screen-l) {
    padding: 107px 0 66px;
  }

  &__title {
    margin-bottom: 30px;
    max-width: 865px;
  }

  &__content {
    display: flex;
    align-items: center;
    max-width: 565px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    @media (min-width: $screen-l) {
      gap: 64px 0;
    }
  }

  &__item {
    display: flex;
    padding: 20px 0;

    @media (min-width: $screen-l) {
      align-items: center;
      padding: 0;
    }

    > p {
      margin-left: 20px;
    }
  }

  &__img {
    position: absolute;
    top: 70px;
    right: 0;

    @media (min-width: $screen-l) {
      top: unset;
      bottom: 0;
    }
  }

  &__ruler {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
    }

    &_mobile {
      margin-top: -50px;
      @media (min-width: $screen-l) {
        display: none;
      }
    }
  }
}
</style>
