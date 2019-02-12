<template>
  <div>
    <app-header></app-header>
    <app-cards></app-cards>
  </div>
</template>

<script>
import Header from '@/components/About/Header.vue';
import Cards from '@/components/About/Cards.vue';

export default {
  components: {
    appHeader: Header,
    appCards: Cards,
  },
};
</script>

<style scoped>
</style>
