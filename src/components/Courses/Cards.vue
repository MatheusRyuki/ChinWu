<template>
  <div class="ui container">
    <div class="ui grid">
      <div class="three column row">
    <app-card v-for="item in cursos" :key="item.id"
      :curso="item.curso"  :descricao="item.descricao" :estilo="item.estilo"></app-card>
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
        curso: 'Wushu',
        descricao: 'Arte Marcial Chinesa de 1950',
        estilo: 'margin-top: 10%',
      }, {
        id: 2,
        curso: 'Sanda',
        descricao: 'Luta Livre ou Boxe-Chinês, é uma forma chinesa moderna de combate corpo-a-corpo, um sistema de auto-defesa, e um esporte de combate.',
      }, {
        id: 3,
        curso: 'Kung-fu',
        descricao: 'Arte Marcial Milenar Chinesa',
        estilo: 'margin-top: -10%',
      }],
    };
  },
};
</script>

<style scoped>
</style>
