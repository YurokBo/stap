<template>
  <section class="about">
    <div class="wrap about__wrap">
      <div class="about__inner">
        <img
          src="@/assets/img/common-bg.png"
          alt="background"
          class="about__inner__bg"
        />
        <Targets />
        <Instruments />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Targets from "@/components/About/Targets/Targets.vue";
import Instruments from "@/components/About/Instruments/Instruments.vue";

export default {
  name: 'About',
  components: { Instruments, Targets },
};
</script>

<style lang="scss">
.about {
  .wrap {
    padding: 0 16px 0 193px;
  }

  &__inner {
    position: relative;
    padding: 33px 0 57px;
    //background-image: url("~@/assets/img/common-bg.png");
    //background-size: cover;
    //background-repeat: no-repeat;
    //background-position: top center;

    &__bg {
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
