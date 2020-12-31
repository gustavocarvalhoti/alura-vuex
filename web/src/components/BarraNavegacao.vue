<template>
    <nav class="navbar navbar-expand-lg navbar-bytebank">
        <a class="navbar-brand" href="#">ByteBank1</a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon">Menu:</span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <BarraNavegacaoLogado v-if="usuarioLogado"/>
            <BarraNavegacaoDeslogado v-else/>
        </div>
    </nav>
</template>

<script>
import BarraNavegacaoLogado from '../components/BarraNavegacaoLogado';
import BarraNavegacaoDeslogado from '../components/BarraNavegacaoDeslogado';

export default {
    name: 'BarraNavegacao',
    data() {
        return {
            usuarioLogado: false,
        }
    },
    components: {
        BarraNavegacaoLogado,
        BarraNavegacaoDeslogado,
    },
    methods: {
        verificarUsuarioLogado() {
            this.usuarioLogado = Boolean(localStorage.getItem('token'));
        },
    },
    watch: {
        '$route.path'() {
            this.verificarUsuarioLogado();
        },
    }
}

</script>

<style>
.navbar {
    background: #27ae60;
}

.navbar-bytebank a {
    color: #fff;
}

.navbar-bytebank a:hover {
    color: #000;
}
</style>
