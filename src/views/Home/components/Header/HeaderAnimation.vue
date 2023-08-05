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
  top: 64px;
  right: 59px;
  width: 611px;
  height: 421px;

  &__content {
    position: relative;
    width: 100%;
    height: 100%;

    .center {
      position: absolute;
      bottom: -4px;
      left: 185px;
      transform: scale(1);
    }

    .text-block {
      position: absolute;
      font-family: $font-family-micra;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.7;
      text-transform: uppercase;

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
      width: 145px;
      height: 156px;
      bottom: 110px;
      left: 50px;

      p {
        left: 25px;
        top: 89px;
      }
    }

    .text-block2 {
      width: 164px;
      height: 124px;
      bottom: 225px;
      left: 192px;

      p {
        left: 50px;
        top: 24px;
        text-align: center;
      }
    }

    .text-block3 {
      width: 160px;
      height: 164px;
      bottom: 146px;
      left: 362px;

      p {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        left: 20px;
        top: 78px;
      }
    }

    .elem {
      position: absolute;
    }

    .elem1 {
      width: 35px;
      height: 38px;
      bottom: 27px;
      left: 180px;
    }

    .elem2 {
      width: 41px;
      height: 49px;
      bottom: 114px;
      left: 161px;
    }

    .elem3 {
      width: 41px;
      height: 21px;
      bottom: 212px;
      left: 262px;
    }

    .elem4 {
      width: 38px;
      height: 34px;
      bottom: 165px;
      left: 360px;
    }

    .main-text {
      position: absolute;
      bottom: 40px;
      right: -10px;
      font-family: $font-family-micra;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.7;
      text-transform: uppercase;
      text-align: center;
    }

    .center-light {
      position: absolute;
      top: -5px;
      left: -23px;
    }
  }
}
</style>
