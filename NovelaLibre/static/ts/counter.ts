// Importa Vue desde el CDN que ya hemos agregado en el index.html
import { defineComponent, ref } from 'vue';

// Definir el componente Vue con TypeScript
const CounterComponent = defineComponent({
    delimiters: ['[[', ']]'],  // Delimitadores personalizados para evitar conflicto con Django
    template: `
        <div>
            Contador: <b> [[ counter ]] </b>
            <button class="button" @click="incCounter">▲</button>
        </div>
    `,
    setup() {
        const counter = ref(0);  // Inicializa el contador con TypeScript
        const incCounter = () => {
            counter.value++;  // Incrementar el contador
        };

        return { counter, incCounter };
    }
});

// Exporta el componente para que pueda ser importado en el archivo principal
export default CounterComponent;
