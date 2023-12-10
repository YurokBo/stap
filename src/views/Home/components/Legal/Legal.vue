<template>
  <section id="legal" class="legal">
    <div class="wrap legal__wrap">
      <h2 class="title title_h2 colored-el legal__title">
        Юридическая помощь
        <BaseLine path="legal/divide-line" class="legal__divide-line" />
        <BaseLine
          path="legal/divide-line-mobile"
          class="legal__divide-line_mobile"
        />
      </h2>
      <BaseInlineTabs
        :tabs="inlineTabs"
        :tab-name="inlineTabName"
        @content="tabContent"
      />
      <div class="legal__content">
        <div class="legal__tabs">
          <BaseTabs
            v-for="(tab, i) in tabs[index]"
            :key="i"
            :tab="i"
            :content="tab"
            :current-tab="currentTab"
            class="legal__tabs__tab"
            @change-tab="changeTab"
          />
        </div>
        <div class="legal__tab-content">
          <div
            v-for="(text, i) in tabsContent[currentTab]"
            :key="i"
            class="text text_medium legal__tab-content__text"
          >
            <BaseListItem :text="text" />
          </div>
        </div>
      </div>
      <BaseButton :text="buttonText" class="legal__button" />
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from '@/components/Base/BaseLine.vue';
import BaseInlineTabs from '@/components/Base/BaseInlineTabs.vue';
import BaseTabs from '@/components/Base/BaseTabs.vue';
import BaseListItem from '@/components/Base/BaseListItem.vue';
import BaseButton from '@/components/Base/BaseButton.vue';

export default {
  name: 'Legal',
  components: { BaseButton, BaseListItem, BaseTabs, BaseInlineTabs, BaseLine },
  data: () => ({
    index: 0,
    inlineTabName: 'legal',
    inlineTabs: [
      {label: 'Вебинары', id: 'webinars', isChecked: true},
      {label: 'Шаблоны', id: 'templates',},
      {label: 'Вопрос-ответ', id: 'qa',},
      {label: 'Очное сопровождение', id: 'accompaniment',},
    ],
    currentTab: 0,
    tabs: [
      [
        'Трудовое<br /> законодательство',
        'Охрана труда',
        'Соблюдение<br /> санитарных норм',
      ],
      [
        'Трудовое<br /> законодательство',
        'Охрана труда',
      ],
      [
        'Трудовое<br /> законодательство',
      ],
      [
        'Охрана труда',
        'Соблюдение<br /> санитарных норм',
      ],
    ],
    tabsContent: [
      [
        '<strong>Пройти любую проверку</strong> без штрафов и приостановки деятельности',
        '<strong>Безопасно открыть прибыльный бизнес:</strong> парикмахерскую, косметологию, общепит, магазин "у дома" и любую другую нишу',
        '<strong>Расширить бизнес</strong> или производство, проверить договоры на новые обекты, ввести новые виды работ и обеспечить их безопасность',
        '<strong>Оценить риски привлечения к ответственности,</strong> снизить штрафы, Проверить работу специалиста по ОТ',
        '<strong>Организовать медосмотры законным<br> способом<strong>',
      ],
      [
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
        'Единые Базы Данных и хранения документов',
        'Управляемые и эффективные процессы',
      ],
      [
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
      ],
      [
        'Минимизация комплаенс-рисков, штрафов, санкций',
        'Эффективные кросс-функциональные бизнес-процессы',
      ],
      [
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
        'Минимизация комплаенс-рисков, штрафов, санкций',
        'Эффективные кросс-функциональные бизнес-процессы',
      ]
    ],
    buttonText: 'Получить<br /> консультацию юриста',
  }),
  computed: {
    accordion() {
      return this.tabs[this.currentTab].map((_, i) => ({
        title: this.tabs[i],
        content: this.tabsContent[i]
      }))
    }
  },
  methods: {
    tabContent(index) {
      if(this.index === index) return;

      this.index = index;
    },
    changeTab(count) {
      return this.currentTab = count;
    },
  }
}
</script>

<style lang="scss">
.legal {
  display: none;
  scroll-margin-top: calc($scroll-margin-top - 40px);

  @media (min-width: $screen-l) {
    display: block;
    padding: 131px 0;
  }

  &__title {
    margin-bottom: 40px;

    @media (min-width: $screen-l) {
      margin-bottom: 80px;
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
      //width: 100%;
      z-index: 1;
      margin-top: -13px;

      @media (min-width: $screen-l) {
        display: none;
      }
    }
  }

  &__content {
    display: none;

    @media (min-width: $screen-l) {
      display: flex;
      align-items: flex-start;
      gap: 30px;
      padding: 59px 40px 18px;
    }
  }

  &__tabs {
    @media (min-width: $screen-l) {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
  }

  &__tab-content {
    @media (min-width: $screen-l) {
      &__text {
        padding: 21px 5px 21px 12px;

        &:nth-child(even) {
          border-radius: 10px;
          background: var(--color-bg-dark-blue);
        }
      }
    }
  }

  &__button {
    @media (min-width: $screen-l) {
      left: 100%;
      transform: translateX(-130%);
    }
  }
}
</style>
