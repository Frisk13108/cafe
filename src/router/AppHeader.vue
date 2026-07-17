<script setup>

</script>

<template>

<div>
    <h1>
        Coffe quality challenge
    </h1>
    <ul>
        <RouterLink to="/" class="header">Home</RouterLink>
        <RouterLink to="/avaliacoes" class="header">Avaliacoes</RouterLink>
        <RouterLink to="/ranking" class="header">Ranking</RouterLink>
    </ul>
</div>
    
        
    
</template>

<style scoped>

.header {
    text-decoration: none;
}
div{
margin: 2rem 15rem;



}
h1 {
    justify-content: flex-start;
    gap: 10vw;
}
ul {
    display: flex;
    gap: 5vw;
    justify-content: flex-end;
    
}

</style>