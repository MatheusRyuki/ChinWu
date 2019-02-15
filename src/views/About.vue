<template>
  <div>
    <app-cabeca></app-cabeca>
    <app-subheader></app-subheader>
    <app-header></app-header>
    <app-cards></app-cards>
    <app-description></app-description>
    <app-videos></app-videos>
  </div>
</template>

<script>
import Header2 from '@/components/About/Header.vue';
import Cards from '@/components/About/Cards.vue';
import Header from '@/components/About/Header0.vue';
import SubHeader from '@/components/About/Subheader.vue';
import Description from "@/components/About/Description.vue";
import Videos from '@/components/About/Videos.vue';

export default {
  components: {
    appHeader: Header2,
    appCards: Cards,
    appCabeca: Header,
    appSubheader: SubHeader,
    appDescription: Description,
    appVideos: Videos
  },
};
</script>

<style scoped>
</style>
