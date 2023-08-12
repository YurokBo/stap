<template>
  <section class="check-list">
    <div class="wrap">
      <h2 class="title title_h1 check-list__title">
        На диагностике вы заберете
        <span class="colored-el">набор чек-листов</span>, которые помогут
        избежать судов:
      </h2>
      <div class="check-list__content">
        <img src="@/assets/img/check-list/ruler.svg" alt="ruler" />
        <div class="check-list__content__items">
          <div
            v-for="(item, i) in checkList"
            :key="i"
            class="check-list__content__item"
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
      'Перечень обязательных <span class="text_bold">документов компании</span><br> по законодательству',
      '<span class="text_bold">Проверка готовности компании</span><br> к автоматизации',
      'Какие <span class="text_bold">документы по обучению работников</span><br> можно вести в электронном формате',
      'Какие <span class="text_bold">документы по медосмотрам</span><br> работников можно вести в электронном формате',
    ]
  })
}
</script>

<style lang="scss">
.check-list {
  position: relative;
  padding: 107px 0 66px;

  &__title {
    margin-bottom: 30px;
    max-width: 865px;
  }

  &__content {
    display: flex;
    align-items: center;
    max-width: 865px;

    &__items {
      display: flex;
      flex-direction: column;
      gap: 64px 0;
      margin-left: 10px;
    }

    &__item {
      display: flex;
      align-items: center;

      > p {
        margin-left: 8px;
      }
    }
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
