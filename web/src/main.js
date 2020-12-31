import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from './http';

Vue.config.productionTip = false;

// $http - significa que ele é global
Vue.prototype.$http = http;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
});
