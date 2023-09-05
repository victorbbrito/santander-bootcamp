'''
Para ler e escrever dados em Python, utilizamos as seguintes funções:
- input: lê uma linha com dados de entrada do usuário;
- print: imprime um texto de saida, pulando linha;
'''

def calculateTax(salary):
    aliquot = 0.00
    if(salary >= 0 and salary <= 1100):
        aliquot = 0.05
    elif(salary > 1100 and salary <= 2500):
        aliquot = 0.10
    else:
        aliquot = 0.15
    return aliquot * salary

salaryValue = float(input())
benefitsValue = float(input())

taxValue = calculateTax(salaryValue)
outputValue = salaryValue - taxValue + benefitsValue

print("{:.2f}".format(outputValue))