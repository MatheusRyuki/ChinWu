<template lang="html">
<div class="ui container">
  <h4 class="ui header blue">{{descricao}}</h4>
  <h1 class="ui header">{{about}}</h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      descricao: 'Nossa História',
      about: 'Sobre nós',
    }
  }
}
</script>

<style lang="css" scoped>
h4.ui.header {
  margin-top: 5%;
}
h1.ui.header {
  margin-top: -2%;
   border-bottom: 2px solid blue;
display: inline-block;
line-height: 2;
}
</style>
