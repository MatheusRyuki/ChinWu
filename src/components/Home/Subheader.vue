<template>
  <div id="menu">
    <div class="ui container">
      <div class="ui stackable container secondary menu">
        <a class="item">
          <img class="ui tiny image" src="@/assets/logo.jpeg">
        </a>
         <div class="right menu">
        <a class="item">
          {{Home}}
        </a>
        <router-link :to="{ name: 'about'}" class="item">
          {{About}}
        </router-link>
        <router-link :to="{ name: 'courses'}" class="item">
          {{Courses}}
        </router-link>
        <router-link :to="{ name: 'gallery'}" class="item">
          {{Gallery}}
        </router-link>
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
.ui.secondary.menu .item {
  font-weight: bolder;
  color: white;
}
.ui.secondary.menu .item:hover {
  color: black;
  font-weight: bolder;
  background-color: white;
}
</style>
