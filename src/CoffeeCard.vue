<script setup>
    import { cafesOrdenados } from './router/cafes';

    defineProps(['nome', 'produtor', 'media', 'id']);
</script>

<template>
    <div>
        <img src="" alt="">
        <h1>
            {{ cafesOrdenados.nome }}
        </h1>
        <p>
            {{ cafesOrdenados.produtor }}
        </p>
        <h2>
            {{ cafesOrdenados.media }}
        </h2>

        <button>
            Ver detalhes
        </button>
    </div>
</template>

<style scoped>

</style>