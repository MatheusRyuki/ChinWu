<template>
  <div class="ui container">
    <div id="title" class="ui left aligned basic segment">
      <h4 class="ui header blue">{{subtitle}}</h4>
      <h1 class="ui header">{{title}}</h1>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subtitle: 'os melhores',
      title: 'Nossos cursos',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam mi, pharetra dapibus justo suscipit, sodales iaculis sapien. Suspendisse vel sollicitudin neque. Nam efficitur ex non turpis pellentesque, quis rhoncus felis blandit. Quisque sit amet augue felis. Sed quis ornare nunc, molestie mattis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo eros, commodo sed ex sed, aliquam tincidunt massa. Donec a quam consectetur, dictum leo a, rutrum odio. Donec tempus turpis facilisis mi bibendum bibendum sed vel risus. Aenean dignissim scelerisque sagittis. Nullam vel faucibus diam. Aliquam dictum tortor in ex vulputate, ut vehicula nibh condimentum. Quisque dictum, ex eu facilisis aliquam, ipsum dolor pulvinar sapien, id laoreet turpis quam id ipsum.',
    };
  },
};
</script>

<style scoped>
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
