<template>
  <div>
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
    appHighlight: Highlight
  },
};
</script>
