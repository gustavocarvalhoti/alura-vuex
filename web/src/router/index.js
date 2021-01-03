import Vue from 'vue';
import VueRouter from 'vue-router';
import provedor from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home'),
        },
        {
            path: '/gerentes',
            name: 'gerentes',
            component: () => import('../views/Gerentes'),
        },
        {
            path: '/cadastre-se',
            name: 'novo.usuario',
            component: () => import('../views/NovoUsuario'),
            meta: {
                public: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login'),
            meta: {
                public: true,
            }
        },
    ],
});

// Verifica antes de montar cada componente
router.beforeEach((routeTo, routeFrom, next) => {
    if (!routeTo.meta.public && !provedor.state.token) {
        next({path: '/login'});
    }
    next();
});

export default router;
