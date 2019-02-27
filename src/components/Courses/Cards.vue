<template>
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
export default {};
</script>

<style scoped>
</style>
