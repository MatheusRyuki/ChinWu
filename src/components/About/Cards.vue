<template lang="html">
  <div class="ui container">
    <div class="ui card">
      <div class="content">
<i class="big user icon"></i>
    <div class="header">{{courses}}</div>
    <div class="description">
      <p>{{descriptionCourses}}</p>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: 'Cursos',
      descriptionCourses: 'Veja aqui os cursos que nós ofertamos em nossa associação!'
    }
  }
}
</script>

<style lang="css" scoped>
.user.icon {
  color: white;
}
.ui.container {
  margin-top: 5%;
}
.ui.card {
  background-color: darkblue;
}
.ui.card>.content>.header, .ui.cards>.card>.content>.header {
    color: white;
    margin-top: 5%;
}
p {
  color: white;
}
</style>
