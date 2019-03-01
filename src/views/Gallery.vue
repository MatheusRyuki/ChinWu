<template lang="html">
  <div>
    <app-header></app-header>
    <app-subheader></app-subheader>
  </div>
</template>

<script>
import Header from '@/components/Gallery/Header.vue';
import Subheader from '@/components/Gallery/Subheader.vue';

export default {
  components: {
    appHeader: Header,
    appSubheader: Subheader,
  }
}
</script>

<style lang="css" scoped>
</style>
