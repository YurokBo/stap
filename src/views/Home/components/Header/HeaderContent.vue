<template>
  <div class="header-content">
    <h1 class="title title_h1 header-content__title">
      <div class="colored-el">Снижение расходов</div>
      компании на операционную <br />деятельность до
      <span class="colored-el">50%</span><br />
      уже через <span class="colored-el">3</span> месяца
    </h1>
    <p class="subtitle colored-el header-content__subtitle">
      за счет автоматизации охраны труда
    </p>
    <HeaderCards />
  </div>
</template>

<script lang="js">
import HeaderCards from "@/views/Home/components/Header/HeaderCards.vue";

export default {
  name: 'HeaderContent',
  components: { HeaderCards },
}
</script>

<style lang="scss">
.header-content {
  &__title {
    margin-bottom: 21px;
  }

  &__subtitle {
    margin-bottom: 45px;
  }
}
</style>
