<template>
  <div class="ui container">
    <h4 class="ui header blue">{{melhores}}</h4>
    <h1 class="ui header"> <div class="teste"></div> {{veja}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      melhores: 'Nossos melhores serviços',
      veja: 'Veja nossos serviços'
    }
  }
}
</script>

<style lang="css" scoped>
h4.ui.header {
  margin-top: 5%;
}
h1.ui.header {
  margin-top: -1%;
   border-bottom: 2px solid blue;
display: inline-block;
line-height: 2;
}
</style>
