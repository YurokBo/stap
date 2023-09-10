<template>
  <div class="header-animation">
    <div class="header-animation__content">
      <img src="@/assets/img/header/central.png" alt="central" class="center" />
      <div
        v-for="(text, i) in texts"
        :key="i"
        class="text-block"
        :class="`text-block${i + 1}`"
      >
        <div class="text-block__content">
          <p v-html="text" />
          <img
            :src="require(`@/assets/img/header/text-block${i + 1}.svg`)"
            alt="text border"
          />
        </div>
      </div>
      <img
        v-for="(_, i) in 4"
        :key="i + 'A'"
        :src="require(`@/assets/img/header/elem${i + 1}.png`)"
        alt="elem"
        class="elem"
        :class="`elem${i + 1}`"
      />
      <p class="main-text">
        программное <br />
        обеспечение
      </p>
      <img
        src="@/assets/img/header/center-light.svg"
        alt="center light"
        class="center-light"
      />
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'HeaderAnimation',
  data: () => ({
    texts: [
      'процессы',
      'единая <br />база<br /> данных',
      'документо <span>оборот</span>',
    ],
  })
}
</script>

<style lang="scss">
.header-animation {
  position: absolute;
  z-index: 3;
  bottom: 120px;
  right: 0;
  width: 100%;
  height: 340px;

  @media (min-width: $screen-l) {
    top: 64px;
    right: 59px;
    bottom: unset;
    width: 611px;
    height: 421px;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;

    .center {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 158px;
      height: 158px;
      transform: translateX(-50%);

      @media (min-width: $screen-l) {
        bottom: -4px;
        left: 185px;
        width: initial;
        height: initial;
        transform: scale(1) translateX(0);
      }
    }

    .text-block {
      position: absolute;
      font-family: $font-family-micra;
      font-size: 7px;
      font-weight: 400;
      line-height: 1.7;
      text-transform: uppercase;

      @media (min-width: $screen-l) {
        font-size: 12px;
      }

      &__content {
        position: relative;

        > p,
        > img {
          position: absolute;
        }

        > p {
          display: inline;
        }
      }
    }

    .text-block1 {
      width: 91px;
      height: 92px;
      bottom: 92px;
      left: 18px;

      @media (min-width: $screen-l) {
        width: 145px;
        height: 156px;
        bottom: 110px;
        left: 50px;
      }

      p {
        left: 15px;
        top: 55px;

        @media (min-width: $screen-l) {
          left: 25px;
          top: 89px;
        }
      }
    }

    .text-block2 {
      width: 91px;
      height: 92px;
      bottom: 140px;
      left: 123px;

      @media (min-width: $screen-l) {
        width: 164px;
        height: 124px;
        bottom: 225px;
        left: 192px;
      }

      p {
        left: 29px;
        top: 16px;
        text-align: center;

        @media (min-width: $screen-l) {
          left: 50px;
          top: 24px;
        }
      }
    }

    .text-block3 {
      width: 91px;
      height: 92px;
      bottom: 112px;
      left: 235px;

      @media (min-width: $screen-l) {
        width: 160px;
        height: 164px;
        bottom: 146px;
        left: 362px;
      }

      p {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        left: 10px;
        top: 45px;

        @media (min-width: $screen-l) {
          left: 20px;
          top: 78px;
        }
      }
    }

    .elem {
      position: absolute;
    }

    .elem1 {
      width: 25px;
      height: 28px;
      bottom: 25px;
      left: 93px;

      @media (min-width: $screen-l) {
        width: 35px;
        height: 38px;
        bottom: 27px;
        left: 180px;
      }
    }

    .elem2 {
      width: 30px;
      height: 30px;
      bottom: 90px;
      left: 87px;

      @media (min-width: $screen-l) {
        width: 41px;
        height: 49px;
        bottom: 114px;
        left: 161px;
      }
    }

    .elem3 {
      width: 28px;
      height: 12px;
      bottom: 155px;
      left: 162px;

      @media (min-width: $screen-l) {
        width: 41px;
        height: 21px;
        bottom: 212px;
        left: 262px;
      }
    }

    .elem4 {
      width: 22px;
      height: 26px;
      bottom: 113px;
      left: 237px;

      @media (min-width: $screen-l) {
        width: 38px;
        height: 34px;
        bottom: 165px;
        left: 360px;
      }
    }

    .main-text {
      position: absolute;
      bottom: 40px;
      right: 10px;
      font-family: $font-family-micra;
      font-size: 8px;
      font-weight: 400;
      line-height: 1.7;
      text-transform: uppercase;
      text-align: center;

      @media (min-width: $screen-l) {
        right: -10px;
        font-size: 20px;
      }
    }

    .center-light {
      display: none;

      @media (min-width: $screen-l) {
        display: block;
        position: absolute;
        top: -5px;
        left: -23px;
      }
    }
  }
}
</style>
