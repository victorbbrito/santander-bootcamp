// tipos primitivos de variáveis

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var num = 1;
console.log(typeof(num));

// string
var nome = "Victor";
console.log(typeof(nome));

// function
var funcao = function(){}
console.log(typeof(funcao));

// declaração de variáveis
// var -> escopo global e local, pode ter seu valor alterado, se não tiver nenhum valor atribuido será tratada como null
var variavel;
console.log(variavel);

// let -> escopo local de bloco, pode ter seu valor alterado, se não tiver nenhum valor atribuido será tratada como null
let variavel2;
console.log(variavel2);

// const -> escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado
const constante = "Victor";
console.log(constante)

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

// atribuição
var atribuicao = 'victor';

// comparação (valor)
var comparacao = '0' == 0;

// comparação identica (valor e tipo)
var comparacaoIdentica = 0 === 0;

// adição
var adicao = 1 + 1;

// subtração
var subtracao = 2 - 1;

// multiplicação
var multiplicacao = 1 * 3;

// divisão real
var divisaoReal = 6/2;

// divisão inteira
var divisaoInteira = 5 % 2;

// potenciação
var potenciacao = 2 ** 10;

// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual

// && e
// || ou
// ! não