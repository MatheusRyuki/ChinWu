<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <app-title></app-title>
    <app-cards></app-cards>
  </div>
</template>

<script>
import Header from '@/components/Courses/Header.vue';
import Subheader from '@/components/Courses/Subheader.vue';
import Title from '@/components/Courses/Title.vue';
import Cards from '@/components/Courses/Cards.vue';

export default {
  components: {
    appHeader: Header,
    appMenu: Subheader,
    appTitle: Title,
    appCards: Cards,
  },
};
</script>

<style scoped>
</style>
