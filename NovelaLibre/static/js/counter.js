"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa Vue desde el CDN que ya hemos agregado en el index.html
var vue_1 = require("vue");
// Definir el componente Vue con TypeScript
var CounterComponent = (0, vue_1.defineComponent)({
    delimiters: ['[[', ']]'], // Delimitadores personalizados para evitar conflicto con Django
    template: "\n        <div>\n            Contador: <b> [[ counter ]] </b>\n            <button class=\"button\" @click=\"incCounter\">\u25B2</button>\n        </div>\n    ",
    setup: function () {
        var counter = (0, vue_1.ref)(0); // Inicializa el contador con TypeScript
        var incCounter = function () {
            counter.value++; // Incrementar el contador
        };
        return { counter: counter, incCounter: incCounter };
    }
});
// Exporta el componente para que pueda ser importado en el archivo principal
exports.default = CounterComponent;
