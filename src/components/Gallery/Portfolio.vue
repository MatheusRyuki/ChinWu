<template lang="html">
  <div class="ui container">
    <div id="title" class="ui basic segment">
      <h4 class="ui header blue">{{subtitle}}</h4>
      <h1 class="ui header">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subtitle: 'veja nossos melhores momentos',
      title: 'Portfólio',
    };
  }
}
</script>

<style lang="css" scoped>
#title {
  margin-top: 5%;
}
.ui.header.blue {
  color: blue;
  margin-bottom: 0%;
}
h1.ui.header {
  margin-top: -1%;
  border-bottom: 2px solid blue;
  display: inline-block;
  line-height: 2;
}
</style>
