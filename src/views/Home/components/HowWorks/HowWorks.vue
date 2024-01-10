<template>
  <section id="works" class="how-works">
    <div class="wrap how-works__wrap">
      <div class="ellipse-light how-works__ellipse-light" />
      <div class="how-works__inner">
        <h2 class="title title_h2 colored-el how-works__title">
          <span> как будем работать </span>
          <BaseLine
            path="how-works/divide-line-how-works"
            class="how-works__divide-line"
          />
          <BaseLine
            path="how-works/divide-line-how-works-mobile"
            class="how-works__divide-line_mobile"
          />
        </h2>
        <div class="how-works__cards">
          <HowWorksCard
            v-for="(info, i) in infos"
            :key="i"
            :number="i + 1"
            :period="info.period"
            :text="info.text"
            :list="info.list"
            :is-button="info.isButton"
            :info="info.info"
            :is-ordered="info.isOrdered"
          />
        </div>
        <BaseButton class="how-works__button" text="Бесплатная консультация<br> по внедрению АИСОТ" />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import BaseLine from '@/components/Base/BaseLine.vue';
import HowWorksCard from '@/views/Home/components/HowWorks/HowWorksCard.vue';
import BaseButton from '@/components/Base/BaseButton.vue';

export default {
  name: 'HowWorks',
  components: { BaseButton, HowWorksCard, BaseLine },
  data: () => ({
    infos: [
      {
        period: '1 день',
        text: 'Бесплатная диагностика текущего состояния компании',
        list: [ 'Узнаете, на каком уровне технологического прогресса находится ваша компания сегодня',
          'Поймете, нужна ли вам автоматизация и в каком объеме',
          'Заберете ценные материалы от наших экспертов для увеличения эффективности работы уже завтра без кардинальных изменений'
        ],
        isButton: true,
      },
      {
        period: 'до 2 недель',
        text: 'Глубокий аудит компании методологом',
        list: [ 'Вы отвечаете на вопросы методолога в первичной анкете',
          'Встречаемся на телефонном интервью и уточненяем детали по ответам и вопросам в первичной анкете',
          'Полноценная встреча онлайн или оффлайн с представителями Компании (ГД, Управление персоналом, Руководитель ОТ, ПБ)',
          'Эксперт STAP презентует результаты Аудита и рассказывает о возможных решениях для компании'
        ],
        isButton: true,
        isOrdered: true,
      },
      {
        period: '1 - 2 недели',
        text: 'Написание технического задания на разработку модулей методологом',
        info: 'Время написания ТЗ зависит от количества модулей и готовности компании к трансформациям',
      },
      {
        period: '2 - 4 недели',
        text: 'Проведение тендера',
        info: 'Время зависит от скорости работы компании-заказчика',
      },
      {
        period: '1 день',
        text: 'Заключение договора',
        info: '1 день на подписание со стороны Исполнителя, т.е. компании STAP',
      },
      {
        period: 'до 5 дней',
        text: 'Встреча с программистом STAP',
        info: 'Количество и продолжительность встреч с разработчиком зависит от сложности интеграции данных на стороне Заказчика и количества разрабатываемых модулей',
      },
      {
        period: '1 - 3 месяца',
        text: 'Интеграция готовых модулей в вашу компанию',
        info: 'Скорость внедрения разработок зависит от количества модулей',
      },
      {
        period: 'бессрочно',
        text: 'Посттехническая поддержка функционирования модулей',
        info: 'Программисты STAP помогут на всем протяжении использования ПО АИСОТ, если возникнут технические сложности',
      },
      {
        period: 'бессрочно',
        text: 'Сопровождение методологом по работе с установленными модулями',
        info: 'Если возникнут сбои в бизнес-процессах и нужна будет помощь методолога в рамках внедренных модулей АИСОТ, эксперт по автоматизации STAP поможет наладить процессы. Это бесплатно во время всего пользования программой.',
      },
    ]
  })
}
</script>

<style lang="scss">
.how-works {
  padding: 0 0 56px;
  scroll-margin-top: calc($scroll-margin-top + 80px);

  @media (min-width: $screen-l) {
    padding: 0 0 77px;
  }

  &__wrap {
    position: relative;
  }

  &__ellipse-light {
    left: -110px;
    bottom: 120px;
    width: 100%;
    height: 588px;

    @media (min-width: $screen-l) {
      left: -110px;
      bottom: -70px;
      width: 725px;
      height: 725px;
    }
  }

  &__inner {
    @media (min-width: $screen-l) {
      padding: 45px 43px 61px;
      background-image: url(~@/assets/img/how-works/bg.svg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: top;
    }
  }

  &__title {
    position: relative;
    margin-bottom: 47px;

    > span {
      display: block;
      width: 250px;
      @media (min-width: $screen-l) {
        width: 100%;
      }
    }
  }

  &__divide-line {
    display: none;
    z-index: 1;

    @media (min-width: $screen-l) {
      display: block;
    }

    &_mobile {
      z-index: 1;
      margin-top: -13px;

      @media (min-width: $screen-l) {
        display: none;
      }
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    margin-bottom: 62px;

    @media (min-width: $screen-l) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 62px 53px;
      margin-bottom: 62px;
    }

    @media (min-width: $screen-l) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      transform: translateX(-53%);
      scale: 0.95;
    }

    .base-button__shine {
      bottom: -203px;
    }
  }
}
</style>
