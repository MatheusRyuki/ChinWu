<template>
  <div class="ui container">
    <div class="ui grid">
      <div class="three column row">
    <app-card v-for="item in cursos" :key="item.id"
      :curso="item.curso"  :descricao="item.descricao"></app-card>
  </div>
  </div>
  </div>
</template>

<script>
import Card from './Card/Card.vue';

export default {
  components: {
    appCard: Card,
  },
  data() {
    return {
      cursos: [{
        id: 1,
        curso: 'Kung-fu',
        descricao: 'Arte Marcial Milenar Chinesa',
      }, {
        id: 2,
        curso: 'Sanda',
        descricao: 'Relaxamento e Alogamento',
      }, {
        id: 3,
        curso: 'Wushu',
        descricao: 'Arte Marcial Chinesa de 1950',
      }],
    };
  },
};
</script>

<style scoped>
</style>
