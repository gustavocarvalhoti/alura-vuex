<template>
    <div id="app">
        <BarraNavegacao/>
        <router-view/>
    </div>
</template>

<script>
import BarraNavegacao from '../src/components/BarraNavegacao';

export default {
    name: 'app',
    components: {
        BarraNavegacao,
    },
    computed: {
        userLogado() {
            return Boolean(localStorage.getItem('token'));
        },
    },
};
</script>
