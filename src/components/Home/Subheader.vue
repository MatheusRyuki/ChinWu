<template>
  <div id="menu">
    <div class="ui container">
      <div class="ui secondary menu">
        <a class="item">
          {{Home}}
        </a>
        <a class="item">
          {{About}}
        </a>
        <a class="item">
          {{Courses}}
        </a>
        <a class="item">
          {{Gallery}}
        </a>
        <a class="item">
          {{Blog}}
        </a>
        <a class="item">
          {{Contact}}
        </a>
        <a class="item">
          {{Membership}}
        </a>
        <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Pesquise algo...">
        <i class="search link icon"></i>
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
      Home: 'Home',
      About: 'Sobre Nós',
      Courses: 'Cursos',
      Gallery: 'Galeria',
      Blog: 'Blog',
      Contact: 'Contato',
      Membership: 'Franquias',
    };
  },
};
</script>

<style scoped>
#menu {
  border-bottom: 1px blue solid;
}
</style>
