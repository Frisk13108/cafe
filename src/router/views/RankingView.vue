<script setup>
import CoffeeCard from '@/CoffeeCard.vue';
import LeaderboardTable from '@/LeaderboardTable.vue';
import { cafesOrdenados } from '../cafes';


</script>

<template>
    <main>
        <h1>
            Ranking Geral
        </h1>
        <p>
            Classificação dos melhores cafés do campeonato.
        </p>

        <LeaderboardTable />

        <CoffeeCard v-for="cafe in cafesOrdenados" :key="cafe.id" :nome="cafe.nome" :produtor="cafe.produtor" :media="cafe.media" />
    </main>
</template>

<style scoped>

</style>