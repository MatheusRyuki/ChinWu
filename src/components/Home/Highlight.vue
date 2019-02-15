<template>
  <div class="ui container">
    <h1 class="ui left aligned header">{{welcome}}<br>{{name}}
    <div class="sub header">
      {{first}} <br>
      {{second}}
    </div>
  </h1>
  <router-link :to="{ name: 'about'}">
<button class="ui massive left floated teal button">{{show}}</button>
</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcome: 'Sejam bem vindos a',
      name: 'Associação Chin wu.',
      first: 'Onde você encontra o melhor do Kung Fu no Estado do Pará.',
      second: 'Conheça nossas modalidades, nossas conquistas e nossa filosofias!',
      show: 'Veja você mesmo nossos trabalhos!',
    };
  },
};
</script>

<style scoped>
.ui.header {
  color: white;
  font-size: 4rem;
  margin-top: 10rem;
}
h1.ui.header .sub.header {
  font-size: 1.5rem;
  color: white;
}
</style>
