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
            <p class="alert alert-danger" v-if="msgError">{{ msgError }}</p>
            <button type="submit" class="btn btn-primary btn-block">
                Logar
            </button>
            <router-link :to="{name: 'novo.usuario'}">
                <div class="cadastro">Não possui um cadastro? Cadastre-se aqui!</div>
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            usuario: {
                email: '',
                senha: '',
            },
            msgError: '',
        }
    },
    methods: {
        logError(error) {
            if (error.request.status === 401) {
                this.msgError = 'Login ou senha inválido.'
            }
        },
        efetuarLogin() {
            this.msgError = '';

            // Dispatch quando chama uma action
            this.$store
                .dispatch('efetuarLogin', this.usuario)
                .then(() => this.$router.push({name: 'gerentes'}))
                .catch(error => this.logError(error));

            /*
            this.$http
                .post('auth/login', this.usuario)
                .then(response => {
                    console.log(response);
                    // Salva os dados na local storage
                    // localStorage.setItem('token', response.data.access_token);

                    this.$store.commit('DEFINIR_USUARIO_LOGADO', {
                        token: response.data.access_token,
                        usuario: response.data.user
                    });

                    this.$router.push({name: 'gerentes'});
                })
                .catch(error => alert('Usuário ou senha inválido!'));
                */
        },
    },
}
</script>

<style>
.cadastro {
    margin-top: 5px;
}
</style>
