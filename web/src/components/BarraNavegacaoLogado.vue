<template>
    <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/gerentes" class="nav-link">
                Gerentes
            </router-link>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link" @click="efetuarLogout">
                Sair
            </a>
        </li>
    </ul>
</template>

<script>

export default {
    methods: {
        efetuarLogout() {
            this.$router.push('login');
            localStorage.removeItem('token');
        },
    },
}

</script>
