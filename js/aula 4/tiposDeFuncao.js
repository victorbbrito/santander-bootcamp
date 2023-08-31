function funcao() {
    let local("mensagem de uma função declarada");
}
funcao();

var funcao2 = function funcao2(){
    console.log("mensagem de uma função de expressão");
}

funcao2()

var funcao3 = function(){
    console.log("mensagem de uma função de expressão")
}

funcao3()

// arrow function

var funcaoArrow = () =>{
    console.log("mensagem de uma arrow function")
}


let array = [1,4,3,7,5,9]
console.log(array[3])