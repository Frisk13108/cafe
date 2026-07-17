<script setup>
import { cafes } from './router/cafes';
import { computed, ref } from 'vue';

defineProps(['id', 'nome', 'produtor', 'media']);

const aroma = ref(0);
const sabor = ref(0);
const acidez = ref(0);
const corpo = ref(0);
const finalizacao = ref(0);

const mediaSCA = computed(() => {
  const notas = [aroma.value, sabor.value, acidez.value, corpo.value, finalizacao.value];
  const soma = notas.reduce((total, valor) => total + Number(valor || 0), 0);
  return (soma / notas.length).toFixed(1);
});

const formulario = ref(null);

function enviarform() {
    if(formulario.value) {
        formulario.value.reset()
    }

}

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
        <h1>
            Nova avaliação
        </h1>
        <form ref="formulario">
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

                <ul class="notas">
                    <li>
                        <p>
                            Aroma
                        </p>
                        <input v-model.number="aroma" type="number" id="notaAroma" min="1" max="10">    
                    </li>
                    
                    <li>
                        <p>
                            Sabor
                        </p>
                        <input v-model.number="sabor" type="number" id="notaSabor" min="1" max="10">  
                    </li>

                    <li>
                        <p>
                            Acidez
                        </p>
                        <input v-model.number="acidez" type="number" id="notaAcidez" min="1" max="10">  
                    </li>

                    <li>
                        <p>
                            Corpo
                        </p>
                        <input v-model.number="corpo" type="number" id="notaCorpo" min="1" max="10">  
                    </li>

                    <li>
                        <p>
                            Finalização
                        </p>
                        <input v-model.number="finalizacao" type="number" id="notaFinalizacao" min="1" max="10">  
                    </li>
                </ul>
            </div>

            <div class="observações">
                <textarea name="observacao" id="sla"></textarea>
            </div>

            <div class="mediaSCA">
                <h1>
                    {{ mediaSCA }}
                </h1>
            </div>

            <button v-on:click="enviarform()">
                Limpar
            </button>
            <button v-on:click="enviarform()">
                Salvar avaliacao
            </button>
        </form>
            

        
    </div>

</template>

<style scoped>

</style>