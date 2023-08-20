<template>
  <div class="header-cards">
    <HeaderCard v-for="(text, i) in cards" :key="i" :text="text" />
  </div>
</template>

<script lang="js">

import HeaderCard from "@/views/Home/components/Header/HeaderCard.vue";

export default {
  name: 'HeaderCards',
  components: { HeaderCard },
  data: () => ({
    cards: [
      'Для компаний от <span class="colored-el">500 сотрудников</span> любой специализации',
      'Аудит и анализ текущих бизнес-процессов <span class="colored-el">методологом</span>',
      'Разработка пошагового плана оптимизации и повышения эффективности',
      'Решения - <span class="colored-el">персонально под ваши</span> задачи и специфику, НЕ шаблонные модули',
    ]
  })
}
</script>

<style lang="scss">
.header {
  &-cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-end;
    align-items: flex-end;

    @media (min-width: $screen-m) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px 27px;
      max-width: 507px;
    }
  }
}
</style>
