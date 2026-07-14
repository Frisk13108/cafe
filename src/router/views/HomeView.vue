<script setup>
import { cafes } from '../cafes';

import MaiorMedia from '../MaiorMedia.vue';
</script>

<template>
    <main>
        <h1>
            Campeonato de Avaliação de Qualidade de Café
        </h1>

        <p>
            Avalie, compare e descubra os melhores cafés especiais
        </p>


        <div>
            <div>
                <h2>
                    Total de Cafés Avaliados
                </h2>
                <h1>
                    {{ cafes.length }}
                </h1>
                <p>
                    cafés
                </p>
            </div>

            <div>
                <h2>
                    Café com Maior Nota
                </h2>
                <h1>
                    {{ maiorNota }}
                </h1>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>