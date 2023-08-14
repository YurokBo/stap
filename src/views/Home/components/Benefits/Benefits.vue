<template>
  <section id="benefits" class="benefits">
    <img
      v-for="digit in digits"
      :key="digit"
      :src="require(`@/assets/img/benefits/digits-${digit}.svg`)"
      alt="digits"
      class="benefits__digits"
      :class="`benefits__digits_${digit}`"
    />
    <div class="wrap">
      <h2 class="title title_h2 colored-el benefits__title">
        Преимущества АИСОТ
        <BaseLine
          path="benefits/divide-line-benefits"
          class="benefits__divide-line"
        />
      </h2>
      <div class="benefits__list">
        <div v-for="(row, i) in list" :key="i" class="benefits__list__row">
          <BaseListItem v-for="(item, i) in row" :key="i" :text="item" />
        </div>
        <div class="benefits__button">
          <BaseButton />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from "@/components/Base/BaseLine.vue";
import BaseListItem from "@/components/Base/BaseListItem.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

export default {
  name: 'Benefits',
  components: { BaseButton, BaseListItem, BaseLine },
  data: () => ({
    digits: [
      'left',
      'right'
    ],
    list: [
      [ '<span class="text_bold">Интеграция с любыми системами: </span><br>1С, SAP, Битрикс и др.',
        '<span class="text_bold">Кросс-функциональные процессы:</span><br> связь с HR, бухгалтерией, логистикой, энергетиками,<br> складами и др.', ],
      [ '<span class="text_bold">Индивидуальные модули</span><br> под ваши задачи, процессы и<br> подразделения',
        '<span class="text_bold">Единоразовая покупка лицензии:</span><br> платите один раз и подключайте любое<br> количество сотрудников и подрядчиков', ],
      [ '<span class="text_bold">Личные кабинеты</span> для руководителя,<br> работников, специалистов по ОТиПБ,<br> пожарной безопасности',
        '<span class="text_bold">Автоматическая замена шаблонов</span><br> через 1 день после выхода изменений<br> законодательства', ],
      [ '<span class="text_bold">Помощь юриста STAP</span> в спортных ситуациях,<br> если вы работаете по <br>нашим шаблонам',
        '<span class="text_bold">Видео-обучение для сотрудников:</span><br> поможет за 1 час освоить новое ПО', ],
      [ '<span class="text_bold">Если хотите частичную автоматизацию:</span><br> подскажем, как настроить работу охраны труда <br>и оставить некоторые бумажные журналы', ],
    ]
  })
}
</script>

<style lang="scss">
.benefits {
  position: relative;
  padding: 106px 0 220px;
  scroll-margin-top: $scroll-margin-top;

  &__list {
    position: relative;

    &__row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 147px;
      padding: 24px 25px;

      &:nth-child(2n) {
        border-radius: 10px;
        background: var(--color-bg-dark-blue);
      }
    }
  }
  &__button {
    position: absolute;
    right: 170px;
    bottom: 0;
  }

  &__digits {
    position: absolute;
    top: -350px;
    z-index: -1;

    &_left {
      left: 0;
    }

    &_right {
      right: 0;
    }
  }
}
</style>
