<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue';
import SubHeader from '@/components/Home/Subheader.vue';

export default {
  components: {
    appHeader: Header,
    appMenu: SubHeader
  },
};
</script>
