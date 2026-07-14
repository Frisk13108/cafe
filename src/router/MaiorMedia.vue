<script setup>
import { cafes } from '../cafes';


let maiorNota = 0;
function maiorMedia () {
    for (let index = 1; index <= cafes.length; index++) {
        const cafeAtual = cafes.find(cafe => cafe.id === index);
        
        if(cafeAtual.media > maiorNota) {
            maiorNota = cafeAtual.media;
        }

    }

}
</script>

<template>
    <main>

    </main>
</template>

<style scoped>

</style>