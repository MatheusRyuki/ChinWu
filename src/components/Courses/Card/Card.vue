<template lang="html">
        <div class="column">
          <div class="ui card" :style=estilo>
          <div class="content">
          <i class="huge user blue icon"></i>
          <div class="header">{{curso}}</div>
          <div class="description">
            <p>{{descricao}}</p>
          </div>
        </div>
          </div>
        </div>
</template>

<script>
export default {
  props: ['curso', 'descricao', 'estilo'],
};
</script>

<style lang="css" scoped>
.ui.card {
  text-align: left;
  border-radius: 0 20% 0 20%;
}
.description {
  margin-bottom: 5%;
}
.ui.grid {
  margin-top: 5%;
}
.ui.card>.content>.header:not(.ui), .ui.cards>.card>.content>.header:not(.ui) {
  margin-top: 5%;
}
</style>
