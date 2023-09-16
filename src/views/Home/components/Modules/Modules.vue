<template>
  <section id="modules" class="modules">
    <div class="wrap modules__wrap">
      <div class="ellipse-light modules__ellipse-light" />
      <h2 class="title title_h2 colored-el modules__title">
        Какие модули есть в АИСОТ?
        <BaseLine path="modules/divide-line" class="modules__divide-line" />
        <BaseLine
          path="modules/divide-line-mobile"
          class="modules__divide-line_mobile"
        />
      </h2>
      <BaseInlineTabs
        :tabs="inlineTabs"
        :tab-name="inlineTabName"
        @content="tabContent"
      />
      <p v-if="!index" class="modules__text">
        <span>Нужны одинаково для всех компаний:</span> модули не зависят от
        ниши и размера компании
      </p>
      <p v-else class="modules__text modules__text_unique">
        <span>
          Модули связывают в одной системе документы кадровиков и других
          служб.Часто это относится к кроссфункциональным процессам.
        </span>
        Например, связь с техническими отделами: работники прокладывают провода
        на вышках и проходят десятки мероприятий по охране труда. Благодаря
        автоматизации им не придется идти в отдел кадров, документы не
        потеряются, сэкономиться от 2 часов рабочего время - всё будет видно в
        личном кабинете
      </p>
      <div class="modules__cards">
        <ModulesCard
          v-for="({ text, iconPath }, i) in cards[index]"
          :key="i"
          :text="text"
          :icon-path="iconPath"
          :index="i"
        />
      </div>
      <div class="modules__button">
        <p v-if="index">Не нашли нужный модуль?</p>
        <BaseButton :text="buttonText" />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from "@/components/Base/BaseLine.vue";
import BaseInlineTabs from "@/components/Base/BaseInlineTabs.vue";
import ModulesCard from "@/views/Home/components/Modules/ModulesCard.vue";
import BaseButton from "@/components/Base/BaseButton.vue";

export default {
  name: 'Modules.vue',
  components: { BaseButton, ModulesCard, BaseInlineTabs, BaseLine },
  data: () => ({
    index: 0,
    inlineTabName: 'modules',
    inlineTabs: [
      {label: 'Основные', id: 'main', isChecked: true},
      {label: 'Уникальные', id: 'unique'},
    ],
    cards: [
      [
        {text: 'Система управления ОТ', iconPath: 'main'},
        {text: 'Обучение (внутреннее/внешнее)', iconPath: 'main'},
        {text: 'СОУТ', iconPath: 'main'},
        {text: 'СИЗЫ и страх.стредства', iconPath: 'main'},
        {text: 'НС, микротравмы', iconPath: 'main'},
        {text: 'Персонал', iconPath: 'main'},
        {text: 'Медосмторы и обязательные освидетельствования', iconPath: 'main'},
        {text: 'Оценка Проф.рисков', iconPath: 'main'},
        {text: 'Происшествия, инциденты', iconPath: 'main'},
        {text: 'Личный кабинет работника, руководителя, администратора', iconPath: 'main'},
      ],
      [
        {text: 'Интеграция с системами по рекрутингу и обучению', iconPath: 'unique'},
        {text: 'Мобильные версии модулей', iconPath: 'unique'},
        {text: 'Учет на РМ материалов, инструментов, оборудования, сырья', iconPath: 'unique'},
        {text: 'Формирование пакета XML для передачи в Реестр Минтруда', iconPath: 'unique'},
        {text: 'Персонал с внутренними системами по электронному подписанию документов', iconPath: 'unique'},
        {text: 'Учет РМ и УТ при изменениях ШР и орг.структуры', iconPath: 'unique'},
        {text: 'Работа с подрядчиками', iconPath: 'unique'},
        {text: 'Организация кроссфункциональных процессов в связке с внутренними системами', iconPath: 'unique'},
      ]
    ]
  }),
  computed: {
    buttonText() {
      return this.index ? 'Разработаем решение<br/> специально для вас' : 'Рассчитать стоимость<br/> модулей';
    }
  },
  methods: {
    tabContent(index) {
      if(this.index === index) return;

      this.index = index;
    }
  }
}
</script>

<style lang="scss">
.modules {
  &__wrap {
    position: relative;
  }

  &__title {
    margin-bottom: 40px;

    @media (min-width: $screen-l) {
      margin-bottom: 80px;
    }
  }

  &__ellipse-light {
    top: 450px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 725px;

    @media (min-width: $screen-l) {
      width: 725px;
    }
  }

  &__divide-line {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
      z-index: 1;
    }

    &_mobile {
      position: absolute;
      left: 10px;
      right: 0;
      width: 100%;
      z-index: 1;
      margin-top: -13px;

      @media (min-width: $screen-l) {
        display: none;
      }
    }
  }

  &__text {
    padding: 27px 0 37px;
    font-size: 14px;

    @media (min-width: $screen-l) {
      padding: 48px 0 57px;
      font-size: 26px;
    }

    > span {
      font-weight: 500;
    }

    &_unique {
      > span {
        display: block;
        margin-bottom: 30px;
      }
    }
  }

  &__cards {
    margin-bottom: 42px;

    @media (min-width: $screen-l) {
      column-count: 2;
      column-gap: 16px;
      margin-bottom: 62px;
      padding: 0 49px;
    }
  }

  &__button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > p {
      margin-bottom: 27px;
      font-size: 18px;

      @media (min-width: $screen-l) {
        font-size: 32px;
      }
    }
  }
}
</style>
