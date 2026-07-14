<script setup>
    import { cafes } from './router/cafes';

    defineProps(['id', 'nome', 'produtor', 'media']);
</script>

<template>
    <ul>
        <li v-for="cafe in cafes" :nome="cafe.nome" :produtor="cafe.produtor" :media="cafe.media" :key="cafe.id">
            <h1>{{ cafe.nome }}</h1>
            <p>{{ cafe.produtor }}</p>
            <h2>{{ cafe.media }}</h2>
        </li>     
    </ul>
    
</template>

<style scoped>

</style>