<template>
  <div class="about-description-mobile">
    <AboutTranscript />
    <img src="@/assets/img/about/about-img-mobile.svg" alt="about-img" />
    <ul class="about-description-mobile__list">
      <li v-for="(_, i) in 4" :key="i" class="about-description-mobile__item">
        <p class="text text_smallest">
          {{ listBefore[i] }}
          <img src="@/assets/img/icons/arrow-right.svg" alt="arrow right" />
          <span>
            {{ listRight[i] }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import AboutTranscript from '@/views/Home/components/About/AboutTranscript.vue';

export default {
  name: 'AboutDescriptionMobile',
  components: { AboutTranscript },
  data: () => ({
    listBefore: [
        'Хаотичные процессы',
        'Ручной труд',
        'Бумажное делопроизводство',
        'Электронная почта и мессенджеры',
    ],
    listRight: [
      'Централизация',
      'Автоматизация',
      'Электронный документооборот',
      'Быстрые средства коммуникации',
    ]
  })
}
</script>

<style lang="scss">
.about-description-mobile {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42px 0 39px;

  > img {
    margin-bottom: 33px;
  }

  &__item {
    padding: 21px 5px 21px 12px;

    &:nth-child(2n + 1) {
      border-radius: 10px;
      background: var(--color-bg-dark-blue);
    }

    > p {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      white-space: nowrap;

      > img {
        margin: 0 12px;
      }

      > span {
        font-weight: 500;
      }
    }
  }
}
</style>
