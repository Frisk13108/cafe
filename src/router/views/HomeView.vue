<script setup>
import { cafes } from '../cafes';
import { cafesOrdenados } from '../cafes';

const maiorMedia = cafesOrdenados[0].media;
const nomeDaMaiorMedia = cafesOrdenados[0].nome;
const produtorMaiorMedia = cafesOrdenados[0].produtor;


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
                    {{ maiorMedia }}
                </h1>
                <h2>
                    {{ nomeDaMaiorMedia }}
                </h2>
                <p>
                    {{ produtorMaiorMedia }}
                </p>
            </div>

            <div>
                <h2>
                    Última Avaliação
                </h2>

                <h1>
                    8.7
                </h1>

                <h2>
                    Arara
                </h2>

                <p>
                    25/05/2024 14:32
                </p>
            </div>

            <a href="/avaliacoes">
                <button>
                    Ver avaliações
                </button>
            </a>
            

            <div>
                <h2>
                    Participe e faça a diferença!
                </h2>

                <p>
                    Cada avaliação ajuda a reconhecer o trabalho dos produtores e a valorizar o café de qualidade.
                </p>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>