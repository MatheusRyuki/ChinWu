<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
  </div>
</template>

<script>
import Header from '@/components/Courses/Header.vue';
import Subheader from '@/components/Courses/Subheader.vue';

export default {
  components: {
    appHeader: Header,
    appMenu: Subheader,
  },
};
</script>

<style scoped>
</style>
