<template>
  <section class="description">
    <div class="wrap description__wrap">
      <h2 class="title title_h2 colored-el how-works__title">
        Для кого подходит ПО АИСОТ?
        <BaseLine
          path="description/divide-line-description"
          class="description__divide-line"
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
            class="description__tabs__tab"
            @change-tab="changeTab"
          />
        </div>
        <img
          src="@/assets/img/description/ruler.svg"
          alt="ruler"
          class="description__content__ruler"
        />
        <div class="description__content__tab-content">
          <div
            v-for="(text, i) in tabContent[currentTab]"
            :key="i"
            class="text text_medium description__content__tab-content__text"
          >
            <BaseNumber :is-size-large="false" :number="i + 1" />
            {{ text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from "@/components/Base/BaseLine.vue";
import BaseTabs from "@/components/Base/BaseTabs.vue";
import BaseNumber from "@/components/Base/BaseNumber.vue";

export default {
  name: 'Description',
  components: { BaseNumber, BaseTabs, BaseLine },
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
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
        'Единые Базы Данных и хранения документов',
        'Управляемые и эффективные процессы',
      ],
      [
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
        'Единые Базы Данных и хранения документов',
        'Управляемые и эффективные процессы',
        'Единая правовая поддержка',
        'Минимизация комплаенс-рисков, штрафов, санкций',
        'Эффективные кросс-функциональные бизнес-процессы',
      ],
      [
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
        'Единые Базы Данных и хранения документов',
        'Управляемые и эффективные процессы',
        'Единая правовая поддержка',
        'Минимизация комплаенс-рисков, штрафов, санкций',
        'Эффективные кросс-функциональные бизнес-процессы',
      ],
      [
        'Снижение расходов на персонал компании',
        'Dashboard 24Х7 по уровням и по компании в целом',
        'Единые Базы Данных и хранения документов',
        'Управляемые и эффективные процессы',
        'Единая правовая поддержка',
        'Минимизация комплаенс-рисков, штрафов, санкций',
        'Эффективные кросс-функциональные бизнес-процессы',
      ]
    ]
  }),
  methods: {
    changeTab(count) {
      return this.currentTab = count;
    },
  }
}
</script>

<style lang="scss">
.description {
  &__content {
    display: flex;

    &__ruler {
      margin-right: 5px;
      margin-left: -1px;
    }

    &__tab-content {
      display: flex;
      flex-direction: column;
      gap: 27px;
      margin-top: 67px;

      &__text {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
      }
    }
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
}
</style>
