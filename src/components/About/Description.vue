<template lang="html">
<div class="ui container">
  <div class="ui grid">
    <div class="three column row">
      <div class="column">
        <img class="ui large image" src="https://images.unsplash.com/photo-1530417838433-4b24dd3f72d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80">
      </div>
      <div class="eight wide column left aligned">
        <h4 class="ui header blue">{{descricao}}</h4>
        <h1 class="ui header">{{about}}</h1>
        <p>{{history}}</p>
        <button class="ui large left floated teal button">{{contact}}</button>
      </div>
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      descricao: 'Nossa História',
      about: 'Sobre nós',
      history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt massa a blandit varius. Praesent porttitor elit ultrices orci mollis aliquet. Proin rutrum a sapien non tempus. Etiam sed efficitur urna. Duis ultricies aliquam risus, non pellentesque nulla aliquam et. Maecenas in consectetur quam. Curabitur consequat rutrum lacus, vitae vestibulum nunc volutpat eu. Mauris porttitor euismod augue, sit amet lobortis nulla sagittis sed. Mauris placerat scelerisque justo, non laoreet arcu mollis vitae. Vestibulum diam dolor, eleifend id ligula ac, ullamcorper consectetur urna. Nulla egestas orci eget risus elementum, eu tristique tortor iaculis.',
      contact: 'Fale conosco!',
    }
  }
}
</script>

<style lang="css" scoped>
.ui.large.image {
  border: 5px solid lightblue;
  margin-top: 10%;
}
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
