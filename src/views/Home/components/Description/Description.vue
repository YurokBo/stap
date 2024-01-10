<template>
  <section class="description">
    <img
      src="@/assets/img/description/hand.png"
      alt="hand"
      class="description__hand"
    />
    <div class="ellipse-light description__ellipse-light" />
    <div class="wrap description__wrap">
      <h2 class="title title_h2 colored-el description__title">
        Для кого подходит ПО АИСОТ?
        <BaseLine
          path="description/divide-line-description"
          class="description__divide-line"
        />
        <BaseLine
          path="description/divide-line-description-mobile"
          class="description__divide-line_mobile"
        />
      </h2>
      <div class="description__content">
        <div class="description__tabs">
          <BaseTabs
            v-for="(tab, i) in tabs"
            :key="i"
            :tab="i"
            :content="tab"
            :current-tab="currentTab"
            class="description__tab"
            @change-tab="changeTab"
          />
        </div>
        <div class="description__tab-content">
          <div
            v-for="(text, i) in tabContent[currentTab]"
            :key="i"
            class="text text_medium description__tab-content-text"
          >
            <img
              src="@/assets/img/description/ruler-part.svg"
              alt="ruler"
              class="description__ruler"
            />
            <BaseNumber :is-size-large="false" :number="i + 1" />
            {{ text }}
          </div>
        </div>
      </div>
      <DescriptionAccordion
        v-for="({ title, content }, i) in accordion"
        :key="i"
        :title="title"
        :content="content"
      />
      <div class="description__cards">
        <DescriptionCard
          v-for="(text, i) in cards"
          :key="i"
          :text="text"
          :icon="`card${i + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from '@/components/Base/BaseLine.vue';
import BaseTabs from '@/components/Base/BaseTabs.vue';
import BaseNumber from '@/components/Base/BaseNumber.vue';
import DescriptionCard from '@/views/Home/components/Description/DescriptionCard.vue';
import DescriptionAccordion from '@/views/Home/components/Description/DescriptionAccordion.vue';

export default {
  name: 'Description',
  components: { DescriptionAccordion, DescriptionCard, BaseNumber, BaseTabs, BaseLine },
  data: () => ({
    currentTab: 0,
    show: false,
    tabs: [
      'ГЕНЕРАЛЬНЫЙ <br />ДИРЕКТОР',
      'РУКОВОДИТЕЛИ <br />ОТиПБ',
      'СОТРУДНИКИ <br />ОТиПБ',
      'РУКОВОДИТЕЛИ ЛЮБОГО <br />ПОДРАЗДЕЛЕНИЯ',
      'РАБОТНИКИ <br />ВСЕЙ КОМПАНИИ',
    ],
    tabContent: [
      [
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
        'Единые Базы Данных и хранения документов',
        'Управляемые и эффективные процессы',
        'Единая правовая поддержка',
        'Минимизация комплаенс-рисков, штрафов, санкций',
        'Эффективные кросс-функциональные бизнес-процессы',
        'Снижение травматизма работников до 0',
      ],
      [
        'Автоформирование планов и задач подразделения',
        'Dashboard 24Х7',
        'Единые Базы Данных и хранения документов',
        'Снижение трудозатрат на постановку и отслеживание задач',
        'Высвобождение времени на организационные вопросы',
        'Автоматическое отслеживание прохождения мероприятий',
        'Доступность информации по работникам и подразделениям 24Х7',
        'Аналитика, отчетность, статистика',
      ],
      [
        'Избавление от рутинной работы в документообороте',
        'Автоформирование документов, заявок по шаблонам, сводных данных, реестров, отчетов',
        'Единые Базы Данных и хранения документов',
        'Автоматическое отслеживание прохождения мероприятий',
        'Формирование заказов поставщикам услуг',
        'Уведомления и напоминания о проведении мероприятий',
        'Аналитика, отчетность, статистика',
      ],
      [
        'Личный кабинет Руководителя',
        'Dashboard 24Х7 по своему подразделению',
        'Единые Базы Данных и хранения документов',
        'Автоформирование документов, заявок для обеспечения сотрудников подразделения',
        'Снижение трудозатрат на постановку и отслеживание задач, орг. вопросы',
        'Уведомление о необходимости провести мероприятия для своих сотрудников',
        'Уведомления о назначенных работникам мероприятиях',
        'Уведомления в случае неисполнения подчиненными назначенных им мероприятий',
        'Возможность назначения работникам видов работ и назначения их ответственными',
      ],
      [
        'Личный кабинет Работника',
        'Доступ к своим данным и документам 24Х7',
        'Единые Базы Данных и хранения документов',
        'Получение уведомлений о назначенных задачах',
        'Уведомления о необходимости прохождения мероприятий',
        'Доступ к информации о прохождении мероприятий 24Х7',
        'Быстрое взаимодействие с ответственными',
        'Заполнение личной информации для формирования потребностей',
      ]
    ],
    cards: [
      'От 500 до ∞ <br />сотрудников',
      'ИП, ООО, ОАО;<br /> 2 и более ЮЛ',
      'В 1, 2 и более <br />локациях'
    ]
  }),
  computed: {
    accordion() {
      return this.tabs.map((_, i) => ({
        title: this.tabs[i],
        content: this.tabContent[i]
      }))
    }
  },
  methods: {
    changeTab(count) {
      return this.currentTab = count;
    },
  }
}
</script>

<style lang="scss">
.description {
  position: relative;

  &__wrap {
    position: relative;
  }

  &__title {
    position: relative;
    margin-bottom: 51px;
    padding: 0 50px 0 10px;

    @media (min-width: $screen-l) {
      width: 100%;
      margin-bottom: 63px;
      padding: 0;
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

  &__ellipse-light {
    top: 100px;
    left: 0;
    width: 100%;
    height: 561px;

    @media (min-width: $screen-l) {
      left: 35%;
      width: 725px;
      height: 725px;
    }
  }

  &__hand {
    display: none;

    @media (min-width: $screen-l) {
      display: block;
      position: absolute;
      z-index: -1;
      top: 50px;
      right: 0;
    }
  }

  &__content {
    display: none;

    @media (min-width: $screen-l) {
      display: flex;
      margin-bottom: 82px;
    }
  }

  &__tab-content {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 62px;
    margin-left: -1px;
  }

  &__tab-content-text {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }

  &__tabs {
    display: flex;
    flex-direction: column;
    gap: 21px;
    margin-right: 58px;

    .base-tab_active {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        top: 58%;
        right: -60px;
        transform: translateY(-100%);
        width: 60px;
        height: 2px;
        background-color: var(--color-bg-medium-blue);
      }

      &:last-child {
        &:after {
          top: 44%;
        }
      }
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 62px;
    padding: 64px 0 52px;

    @media (min-width: $screen-l) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 43px;
      padding: 0;
    }
  }
}
</style>
