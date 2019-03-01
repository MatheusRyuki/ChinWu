<template lang="html">
  <div>
    <app-header></app-header>
    <app-subheader></app-subheader>
    <app-portfolio></app-portfolio>
  </div>
</template>

<script>
import Header from '@/components/Gallery/Header.vue';
import Subheader from '@/components/Gallery/Subheader.vue';
import Portfolio from '@/components/Gallery/Portfolio.vue';

export default {
  components: {
    appHeader: Header,
    appSubheader: Subheader,
    appPortfolio: Portfolio,
  }
}
</script>

<style lang="css" scoped>
</style>
