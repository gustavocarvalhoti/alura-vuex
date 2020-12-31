<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input id="email" type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input id="senha" type="password" class="form-control" v-model="usuario.senha">
            </div>
            <button type="submit" class="btn btn-primary btn-block">
                Logar
            </button>
            <router-link :to="{name: 'novo.usuario'}">
                Não possui um cadastro, cadastre-se aqui!
            </router-link>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            usuario: {
                email: '',
                senha: '',
            }
        }
    },
    methods: {
        efetuarLogin() {
            this.$http
                .post('auth/login', this.usuario)
                .then(response => {
                    console.log(response);
                    // Salva os dados na local storage
                    localStorage.setItem('token', response.data.access_token);
                    this.$router.push({name: 'gerentes'});
                })
                .catch(error => alert('Usuário ou senha inválido!'));
        },
    },
}
</script>
