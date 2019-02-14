<template>
  <div>
    <app-cabeca></app-cabeca>
    <app-subheader></app-subheader>
    <app-header></app-header>
    <app-cards></app-cards>
  </div>
</template>

<script>
import Header2 from '@/components/About/Header.vue';
import Cards from '@/components/About/Cards.vue';
import Header from '@/components/About/Header0.vue';
import SubHeader from '@/components/About/Subheader.vue';

export default {
  components: {
    appHeader: Header2,
    appCards: Cards,
    appCabeca: Header,
    appSubheader: SubHeader,
  },
};
</script>

<style scoped>
</style>
