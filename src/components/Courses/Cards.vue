<template>
  <div class="ui container">
    <div class="ui grid">
      <div class="three column row">
          <div class="column">
            <div class="ui card">
            <div class="content">
            <i class="huge user icon"></i>
            <div class="header">{{courses[0]}}</div>
            <div class="description">
              <p>{{descriptionCourses[0]}}</p>
            </div>
          </div>
            </div>
          </div>
          <div class="column">
            <div class="ui card">
              <div class="content">
        <i class="big images outline icon"></i>
            <div class="header"></div>
            <div class="description">
              <p></p>
            </div>
          </div>
            </div>
          </div>
          <div class="column">
            <div class="ui card">
              <div class="content">
      <i class="big briefcase icon"></i>
            <div class="header"></div>
            <div class="description">
              <p></p>
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
      courses: ['Kung-fu'],
      descriptionCourses: ['Arte Marcial Milenar Chinesa'],
    };
  },
};
</script>

<style scoped>
.ui.card {
  border-radius: 0 20% 0 20%;
}
.ui.grid {
  margin-top: 5%;
}
.ui.card>.content>.header:not(.ui), .ui.cards>.card>.content>.header:not(.ui) {
  margin-top: 5%;
}
</style>
