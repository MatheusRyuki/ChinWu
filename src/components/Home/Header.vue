<template>
  <div id="header">
    <div class="ui container">
      <div class="ui secondary menu">
        <a class="browse item">
            <i class="teal globe icon"></i>
            <div class="ui simple dropdown">
    <div class="default text">{{language}}</div>
        <i class="teal dropdown icon"></i>
    <div class="menu">
    <div class="item">{{pt}}<i class="br flag"></i></div>
    <div class="item">{{en}}<i class="gb flag"></i></div>
    <div class="item">{{es}} <i class="es flag"></i></div>
  </div>
              </div>
      </a>
       <div class="right menu">
         <a class="item">
           {{login}}
         </a>
         <span class="item">|</span>
         <a class="item">
          {{register}}
          </a>
       </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      language: 'Idioma',
      login: 'Login',
      register: 'Registrar-se',
      pt: 'Português  ',
      en: 'Inglês  ',
      es: 'Espanhol  ',
    };
  },
  mounted() {
    // eslint-disable-next-line
    $(".ui.dropdown").dropdown();
  },
};
</script>

<style scoped>
#header {
  background-color: darkblue;
}
span {
    color: white;
}
.ui.secondary.menu .item {
  color: white;
}
.ui.secondary.menu .item:hover {
  color: gray;
}
</style>
