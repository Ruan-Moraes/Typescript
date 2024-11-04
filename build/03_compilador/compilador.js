"use strict";
let canal = 'Gaveta';
let inscritos = 610234;
// let nome = 'Pedro'; // Já foi declarado a variável nome no arquivo 02_tipos/tipos.ts
// canal = inscritos;
console.log(`Canal = ${canal}`);
// function soma(a, b: any) { // Parâmetro 'a' pode ser qualquer coisa, e isso pode gerar problemas
//     return a + b;
// } // Erro: Parâmetro 'a' implicitamente tem um tipo 'any'
// function soma(a: any, b: any) {
//     return a + b;
// } // Não dá erro, mas não é o ideal
let qualquerCoisa; // Tipo any
qualquerCoisa = 12; // Compilador consegue inferir o tipo da variável, neste caso, number (por causa do valor atribuído)
qualquerCoisa = 'abc'; // Compilador consegue inferir o tipo da variável, neste caso, string (por causa do valor atribuído)
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    //   else {
    //     saudacao = 'Boa vida!';
    //   } // Se não tiver o else, o compilador entende que a variável 'saudacao' pode não ser inicializada e resultará em erro
    // return saudacao; // Erro: possibilidade de 'saudacao' não ser inicializada
} // Erro: 'saudacao' é usada antes de ser atribuída
console.log(saudar(true));
//# sourceMappingURL=compilador.js.map