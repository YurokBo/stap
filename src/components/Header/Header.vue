<template>
  <header class="header">
    <div class="wrap header-wrap">
      <div class="header-inner">
        <HeaderContent />
      </div>
    </div>
  </header>
</template>

<script lang="js">
import HeaderContent from "@/components/Header/HeaderContent";

export default {
  name: 'Header',
  components: { HeaderContent },
}
</script>

<style lang="scss">
.header {
  padding: 111px 0 50px;

  &-inner {
    padding: 45px 45px 66px 54px;
    background-image: url("~@/assets/img/header/header-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
  }
}
</style>
