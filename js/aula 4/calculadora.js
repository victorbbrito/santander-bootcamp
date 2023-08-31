function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real(/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)'));

    if(!operacao || operacao >= 7){
        alert("ERRO - Operação inválida")
        calculadora()
    }else{
        let num1 = Number(prompt('Insira o primeiro valor'));
        let num2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if(!num1 || !num2){
            alert("ERRO - Parâmetros inválidos")
            calculadora()
        }else{

            function soma(){
                resultado = num1 + num2
                alert(`${num1} + ${num2} = ${resultado}`);
            };
        
            function subtracao(){
                resultado = num1 - num2
                alert(`${num1} - ${num2} = ${resultado}`);
            };
        
            function multiplicacao(){
                resultado = num1 * num2
                alert(`${num1} * ${num2} = ${resultado}`);
            };
        
            function divisao(){
                resultado = num1 / num2
                alert(`${num1} / ${num2} = ${resultado}`);
            };
        
            function divisaoInteira(){
                resultado = num1 % num2
                alert(`O resto da divisão entre ${num1} e ${num2} é igual a${resultado}`);
            };
        
            function potenciacao(){
                resultado = num1 ** num2
                alert(`${num1} elevado a ${num2} é igual a ${resultado}`);
            };
        
            function novaOperação(){
                let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não');
        
                if (opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert("bye bye")
                }else{
                    alert("ERRO - Digite uma opção válida")
                    novaOperação()
                }
            }
        
            switch(operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
            novaOperação()
        }
    }
}

calculadora();