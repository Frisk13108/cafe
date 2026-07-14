<script setup>
    import { cafes } from './router/cafes';

    defineProps(['nome', 'produtor', 'media', 'id']);
</script>

<template>
    <div>
        <img src="" alt="">
        <h1>
            {{ cafes.nome }}
        </h1>
        <p>
            {{ cafes.produtor }}
        </p>
        <h2>
            {{ cafes.media }}
        </h2>
    </div>
</template>

<style scoped>

</style>