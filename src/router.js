import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const HomeComponent = require('@/views/Home.vue');
const AboutComponent = require('@/views/About.vue');
const CoursesComponent = require('@/views/Course.vue');

const Home = (resolve) => {
  require.ensure(['@/views/Home.vue'], () => {
    resolve(HomeComponent);
  });
};

const About = (resolve) => {
  require.ensure(['@/views/About.vue'], () => {
    resolve(AboutComponent);
  });
};

const Courses = (resolve) => {
  require.ensure(['@/views/Course.vue'], () => {
    resolve(CoursesComponent);
  });
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '/Courses',
      name: 'courses',
      component: Courses,
    }
  ],
});
