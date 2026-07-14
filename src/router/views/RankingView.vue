<script setup>
import CoffeeCard from '@/CoffeeCard.vue';
import LeaderboardTable from '@/LeaderboardTable.vue';


</script>

<template>
    <main>
        <h1>
            Pagina de ranking
        </h1>

        <LeaderboardTable />

        <CoffeeCard v-for="cafe in cafes" :key="cafe.id" :nome="cafe.nome" :produtor="cafe.produtor" :media="cafe.media" />
    </main>
</template>

<style scoped>

</style>