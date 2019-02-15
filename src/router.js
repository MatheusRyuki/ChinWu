import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Home = resolve => {
  require.ensure(["@/views/Home.vue"], () => {
    resolve(require("@/views/Home.vue"));
  });
};

const About = resolve => {
  require.ensure(["@/views/About.vue"], () => {
    resolve(require("@/views/About.vue"));
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
      component: About
    }
  ],
});
