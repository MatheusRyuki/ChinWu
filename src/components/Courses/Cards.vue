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
        curso: 'Kung-fu',
        descricao: 'Arte Marcial Milenar Chinesa, Kung Fu  é uma palavra chinesa que, em forma coloquial, pode significar "tempo e habilidade", "trabalho duro", algo adquirido através de esforço ou, ainda, competência na luta corporal.',
        estilo: 'margin-top: -10%',
      }, {
        id: 2,
        curso: 'Sanda',
        descricao: 'Boxe-Chinês é uma forma chinesa moderna de combate corpo-a-corpo, um sistema de auto-defesa, e um esporte de combate.',
      }, {
        id: 3,
        curso: 'Wushu',
        descricao: 'Wushu é um termo chinês que, literalmente, significa "arte da guerra" ou "arte marcial". Na China, este termo caracteriza qualquer estilo de arte marcial, ou tarefa feita com perfeição, não apenas artes marciais.',
        estilo: 'margin-top: 10%',
      }],
    };
  },
};
</script>

<style scoped>
.ui.container {
  margin-top: 10%;
}
</style>
