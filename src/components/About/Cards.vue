<template lang="html">
  <div class="ui container">
    <div class="ui grid">
      <div class="three column row">
          <div class="column">
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
          <div class="column">
            <div class="ui card">
              <div class="content">
        <i class="big images outline icon"></i>
            <div class="header">{{gallery}}</div>
            <div class="description">
              <p>{{descriptionGallery}}</p>
            </div>
          </div>
            </div>
          </div>
          <div class="column">
            <div class="ui card">
              <div class="content">
      <i class="big briefcase icon"></i>
            <div class="header">{{group}}</div>
            <div class="description">
              <p>{{descriptionGroup}}</p>
            </div>
          </div>
            </div>
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
      descriptionCourses: 'Veja aqui os cursos que nós ofertamos em nossa associação!',
      gallery: 'Galeria',
      descriptionGallery: 'Veja aqui as fotos e vídeos dos últimos eventos nossos!',
      group: 'Franquias',
      descriptionGroup: 'Como se tornar participante de nossa associação'
    }
  }
}
</script>

<style lang="css" scoped>
.user.icon {
  color: white;
}
.images.icon {
  color: white;
}
.ui.container {
  margin-top: 5%;
}
.briefcase.icon {
  color: white;
}
.ui.card {
  background-color: darkblue;
  border-radius: 0 20% 0 20%;
}
.ui.card>.content>.header, .ui.cards>.card>.content>.header {
    color: white;
    margin-top: 5%;
}
p {
  color: white;
}
.ui.card:hover {
  filter: brightness(75%);
  cursor: pointer;
}
</style>
