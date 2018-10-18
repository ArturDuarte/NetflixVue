import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);

import App from './App.vue'
import Login from './componentes/Login'
import Cadastro from './componentes/Cadastro'


// new Vue({
//   el: '#app',
//   render: h => h(App)
// });


const routes = [
  // apenas barra se for a primeira pagina caira na home
  { path: '/', component: Login},
  { path: '/App', name: 'App', component: App },
  { path: '/Cadastro', name:'Cadastro',component: Cadastro}

];

//para rotas adicionais
const router = new VueRouter({

  routes
});

const app = new Vue({
  router
}).$mount('#app');
//
// export default {
//   computed: {
//     username () {
//       // We will see what `params` is shortly
//       return this.$route.params.username
//     }
//   },
//   methods: {
//     goBack () {
//       window.history.length > 1
//         ? this.$router.go(-1)
//         : this.$router.push('/')
//     }
//   }
// }
