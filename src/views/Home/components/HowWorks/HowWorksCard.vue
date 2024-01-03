<template>
  <div class="how-works-card" @click="showContent">
    <div class="how-works-card__header">
      <BaseNumber :number="number" class="how-works-card__header-number" />
      <BasePeriod :text="period" />
    </div>
    <p class="text text_medium how-works-card__text">
      {{ text }}
    </p>
    <img
      src="@/assets/img/how-works/tap.svg"
      alt="tap"
      class="how-works-card__tap"
      :class="{ 'how-works-card__tap_rotate': isShowContent }"
    />
    <transition name="fade">
      <div v-show="isShowContent" class="how-works-card__content">
        <ul class="text text_medium how-works-card__content__infos">
          <li v-for="(info, i) in infos" :key="i">
            {{ info }}
          </li>
        </ul>
        <BaseButton
          :text="'Узнать подробнее <br /> и записаться'"
          :is-finger-print="false"
          :is-shine="false"
          class="how-works-card__content__button"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="js">
import BaseButton from '@/components/Base/BaseButton.vue';
import BasePeriod from '@/components/Base/BasePeriod.vue';
import BaseNumber from '@/components/Base/BaseNumber.vue';

export default {
  name: 'HowWorksCard',
  components: { BaseNumber, BasePeriod, BaseButton },
  props: {
    number: {
      type: Number,
      default: 1
    },
    period: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    infos: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    isShowContent: false,
  }),
  methods: {
    showContent() {
      this.isShowContent = !this.isShowContent;
    }
  }
}
</script>

<style lang="scss">
.how-works-card {
  position: relative;
  padding: 15px 13px 47px;
  border-radius: 10px;
  border: 2px solid var(--color-border);
  background: var(--color-bg-dark-blue2);
  cursor: pointer;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding: 32px 22px 30px 18px;
    background-image: url("~@/assets/img/how-works/card-bg.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;

    @media (min-width: $screen-l) {
      padding: 32px 26px 30px 40px;
    }
  }

  &__header-number {
    font-size: 52px;
  }

  &__text {
    width: 290px;
    font-size: 16px;
    font-style: normal;
    font-weight: 350;
  }

  &__tap {
    position: absolute;
    right: 16px;
    bottom: 24px;
    transition: all 0.3s ease-in-out;

    &_rotate {
      transform: rotateZ(180deg);
    }
  }

  &__content {
    position: absolute;
    z-index: 1;
    top: 95%;
    left: -2px;
    right: -2px;
    padding: 40px 23px;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(180deg, #7bf1f1 0%, #004c7d 100%);
    color: var(--color-text-black);

    &__infos {
      margin-bottom: 33px;

      > li {
        position: relative;
        padding-left: 25px;

        &:before {
          content: "";
          position: absolute;
          top: 8px;
          left: 12px;
          width: 2px;
          height: 2px;
          background-color: var(--color-bg-dark);
          border-radius: 50%;
        }
      }
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
