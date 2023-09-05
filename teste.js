//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorInicial = 1000;
const taxaJuros = 0.06;
const periodo = 3;

let valorFinal = valorInicial;

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
for (let i=0; i<periodo; i++){
  valorFinal = valorFinal + (valorFinal * taxaJuros);
}

console.log(`Valor final do investimento: R$ ${valorFinal.toFixed(2)}`);