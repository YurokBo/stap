<template>
  <div class="about-description">
    <div class="about-description__content">
      <div class="about-description__text about-description__text_before">
        <p v-for="(text, i) in textBefore" :key="i">
          {{ text }}
          <img src="@/assets/img/icons/arrow-right.svg" alt="arrow right" />
        </p>
      </div>
      <img
        src="@/assets/img/about/about-img.svg"
        alt="about-img"
        class="about-description__img"
      />
      <div class="about-description__text about-description__text_after">
        <p
          v-for="(text, i) in textAfter"
          :key="i + 'A'"
          class="about-description__text"
        >
          <img src="@/assets/img/icons/arrow-right.svg" alt="arrow right" />
          {{ text }}
        </p>
      </div>
      <img
        src="@/assets/img/icons/arrow-right.svg"
        alt="arrow down"
        class="about-description__arrow"
      />
    </div>
    <div ref="aboutTranscriptRef" class="about-description__animation">
      <AboutTranscript />
    </div>
  </div>
</template>

<script lang="js">
import AboutTranscript from '@/views/Home/components/About/AboutTranscript.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'AboutDescription',
  components: { AboutTranscript },
  data: () => ({
    textBefore: [
      'Хаотичные процессы',
      'Ручной труд',
      'Бумажное делопроизводство',
      'Электронная почта и мессенджеры',
    ],
    textAfter: [
      'Централизация',
      'Автоматизация',
      'Электронный документооборот',
      'Быстрые средства коммуникации',
    ],
  }),
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    this.initAnimation();
  },
  methods: {
    initAnimation() {
      const animateElement = this.$refs.aboutTranscriptRef;

      const enterAnimation = gsap.from(animateElement, {
        opacity: 0,
        y: 50,
        duration: 1.5,
      });

      ScrollTrigger.create({
        trigger: animateElement,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none none',
        onEnter: () => {
          enterAnimation.restart();
        },
        onLeaveBack: () => {
          enterAnimation.reverse();
        },
      });
    },
  }
}
</script>

<style lang="scss">
.about-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 77px 0 55px;

  &__animation {
    opacity: 1;
  }

  &__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    width: 240px;

    &_before {
      margin-right: -100px;

      > p {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 40px;
        font-weight: 350;
        text-align: right;

        &:last-child {
          align-items: flex-start;
          margin-bottom: 0;
        }

        > img {
          margin-left: 16px;
        }
      }
    }

    &_after {
      order: 1;
      margin-left: -80px;

      > p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 40px;
        font-weight: 500;
        text-align: left;

        &:last-child {
          align-items: flex-start;
          margin-bottom: 0;
        }

        > img {
          margin-right: 36px;
        }
      }
    }
  }

  &__arrow {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%) rotateZ(90deg);
  }
}
</style>
