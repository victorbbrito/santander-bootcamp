// Desafios JavaScript na DIO têm funções "gets" e "print" acessiveis globalmente;
// - gets : Lê uma linha com dados de entrada do usuário;
// - print: imprime um texto de saida, pulando linha;

const salaryValue = parseFloat(gets());
const benefitsValue = parseFloat(gets());

const taxValue = calculateTax(salaryValue);

const outputValue = salaryValue - taxValue + benefitsValue;
print(outputValue.toFixed(2));

function calculateTax(salary){
    let aliquot;
    if (salary >=0 && salary <= 1100){
        aliquot = 0.05;
    }
    else if(salary >1100 && salary <= 2500){
        aliquot = 0.10;
    }
    else{
        aliquot = 0.15;
    }
    return aliquot * salary;
}