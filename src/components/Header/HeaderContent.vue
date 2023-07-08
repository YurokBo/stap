<template>
  <div class="header-content">
    <h1 class="title title_h1 header-title">
      <div class="colored-el">Снижение расходов</div>
      компании на операционную <br />деятельность до
      <span class="colored-el">50%</span><br />
      уже через <span class="colored-el">3</span> месяца
    </h1>
    <p class="sub-title colored-el header-subtitle">
      за счет автоматизации охраны труда
    </p>
    <HeaderCards />
  </div>
</template>

<script lang="js">
import HeaderCards from "@/components/Header/HeaderCards.vue";

export default {
  name: 'HeaderContent',
  components: { HeaderCards },
}
</script>

<style lang="scss">
.header {
  &-title {
    margin-bottom: 21px;
  }

  &-subtitle {
    margin-bottom: 45px;
  }
}
</style>
