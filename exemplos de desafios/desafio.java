// para ler e escrever dados em Java, aqui na DIO padronizamos da seguinte forma:
// - New Scanner(System.in): cria um leitor de entrada, com métodos uteis com prefixo "next";
// - System.out.println: imprime um texto de Saída (output) e pulando uma linha.

import java.util.Scanner;

public class Desafio{
    public static void main(String[] args){
        Scanner valueInput = new Scanner(System.in);
        float salaryValue = valueInput.nextFloat();
        float benefitsValue = valueInput.nextFloat();

        float taxValue = 0;
        if (salaryValue >= 0 && salaryValue <= 1100){
            taxValue = 0.05F * salaryValue;
        }
        else if (salaryValue > 1100 && salaryValue <= 2500){
            taxValue = 0.10F * salaryValue;
        }
        else{
            taxValue = 0.15F * salaryValue;
        }
        float outputValue = salaryValue - taxValue + benefitsValue;
        System.out.println(String.format("%2f", outputValue));
    }
}