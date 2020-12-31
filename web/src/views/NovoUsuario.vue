<template>
    <div class="container">
        <h1>Novo usuário</h1>
        <form @submit.prevent="enviarFormulario">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input id="nome"
                       type="text"
                       class="form-control"
                       v-model="usuario.nome"
                />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input id="email"
                       type="text"
                       class="form-control"
                       v-model="usuario.email"
                />
            </div>
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input id="senha"
                       type="password"
                       class="form-control"
                       v-model="usuario.senha"
                />
            </div>
            <button class="btn btn-primary" type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: {
                nome: '',
                senha: '',
                email: ''
            }
        }
    },
    methods: {
        enviarFormulario() {
            this.$http
                .post('auth/register', this.usuario)
                .then(response => {
                    console.log(response);
                    this.$router.push({name: 'login'});
                })
                .catch(error => console.log(error));
        },
    },
}
</script>
