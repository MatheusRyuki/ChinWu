<template lang="html">
  <div>
    <div id="text">
      <h2 class="ui header text-light ">{{title}}</h2>
      <h1 class="ui header text-light">{{message}}</h1>
    </div>
    <video class="ui fluid image"
  src="@/assets/Kungfu.mp4"
  autoplay
  loop
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Venha treinar conosco',
      message: 'Participe agora da melhor experiência de Kung Fu'
    };
  }
};
</script>

<style lang="css" scoped>
.ui.fluid.image {
  margin-top: 5%;
  filter: brightness(25%);
}
#text {
  margin: 0 auto;
  z-index: 2;
  width: 100%;
  margin-top: 20%;
  position: absolute;
}
.text-light {
  color: white;
}
</style>
