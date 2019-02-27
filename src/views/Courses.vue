<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <app-title></app-title>
  </div>
</template>

<script>
import Header from '@/components/Courses/Header.vue';
import Subheader from '@/components/Courses/Subheader.vue';
import Title from '@/components/Courses/Title.vue';

export default {
  components: {
    appHeader: Header,
    appMenu: Subheader,
    appTitle: Title,
  },
};
</script>

<style scoped>
</style>
