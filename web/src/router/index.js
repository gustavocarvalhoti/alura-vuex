import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Gerentes from "../views/Gerentes";
import NovoUsuario from "../views/NovoUsuario";
import Login from "../views/Login";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/gerentes',
            name: 'gerentes',
            component: Gerentes,
        },
        {
            path: '/cadastre-se',
            name: 'novo.usuario',
            component: NovoUsuario,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    ],
});
