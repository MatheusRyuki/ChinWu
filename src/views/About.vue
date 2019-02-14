<template>
  <div>
    <app-cabeca></app-cabeca>
    <app-subheader></app-subheader>
    <app-header></app-header>
    <app-cards></app-cards>
    <app-description></app-description>
  </div>
</template>

<script>
import Header2 from '@/components/About/Header.vue';
import Cards from '@/components/About/Cards.vue';
import Header from '@/components/About/Header0.vue';
import SubHeader from '@/components/About/Subheader.vue';
import Description from "@/components/About/Description.vue";

export default {
  components: {
    appHeader: Header2,
    appCards: Cards,
    appCabeca: Header,
    appSubheader: SubHeader,
    appDescription: Description,
  },
};
</script>

<style scoped>
</style>
