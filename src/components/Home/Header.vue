<template>
  <div id="header">
    <div class="ui container">
      <div class="ui secondary menu">
        <a class="browse item">
        <i class="teal globe icon"></i>
        <span>{{language}}</span>
        <i class="teal dropdown icon"></i>
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
      language: "Idioma",
      login: "Login",
      register: "Registrar-se"
    }
  }
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
