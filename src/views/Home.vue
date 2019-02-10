<template>
  <div id="main">
    <app-header></app-header>
    <app-menu></app-menu>
    <app-highlight></app-highlight>
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue';
import SubHeader from '@/components/Home/Subheader.vue';
import Highlight from '@/components/Home/Highlight.vue';

export default {
  components: {
    appHeader: Header,
    appMenu: SubHeader,
    appHighlight: Highlight,
  },
};
</script>

<style scoped>
#main {
  background: url("../assets/1.png") no-repeat center center fixed;
  background-color: black;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
}
</style>
