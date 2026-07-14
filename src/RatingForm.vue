<script setup>
import { cafes } from './router/cafes';

defineProps(['id', 'nome', 'produtor', 'media']);

</script>

<template>

    <ul>
        <h2>
            Cafés avaliados
        </h2>
        <li v-for="cafe in cafes" :nome="cafe.nome" :produtor="cafe.produtor" :media="cafe.media" :key="cafe.id">
            <h2>
                {{ cafe.nome }}
            </h2>
            <p>
                {{ cafe.produtor }}
            </p>
            <h1>
                Média SCA
                {{ cafe.media }}
            </h1>
        </li>
    </ul>

    <div class="avaliacao">

        <div class="nome">
            <h1>
                Nome do Café
            </h1>
            
            <input type="text" class="nomeCafe">
        </div>

        <div class="produtor">
            <h1>
                Produtor
            </h1>
            
            <input type="text" class="produtorCafe">
        </div>

        <div class="notas">
            <h1>
                Notas SCA (0 a 10)
            </h1>

            <ul class="aroma">
                <li>
                    <p>
                        Aroma
                    </p>
                    <input type="number" class="notaAroma" min="1" max="10">    
                </li>
                
                <li>
                    <p>
                        Sabor
                    </p>
                    <input type="number" class="notaSabor" min="1" max="10">  
                </li>

                <li>
                    <p>
                        Acidez
                    </p>
                    <input type="number" class="notaAcidez" min="1" max="10">  
                </li>

                <li>
                    <p>
                        Corpo
                    </p>
                    <input type="number" class="notaCorpo" min="1" max="10">  
                </li>

                <li>
                    <p>
                        Finalização
                    </p>
                    <input type="number" class="notaFinalizacao" min="1" max="10">  
                </li>
            </ul>
        </div>

        <div class="observações">
            <textarea name="observacao" id="sla"></textarea>
        </div>
    </div>

</template>

<style scoped>

</style>