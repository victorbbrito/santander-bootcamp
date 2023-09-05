// para ler e escrever dados em C#, utilizamos os seguintes métodos da classe Console:
// - Console.ReadLine: lê uma linha com dados de entrada do usuário;
// - Console.WriteLine: imprime um texto de saida e pulando uma linha;

using System;

public class Desafio
{
    public static void Main()
    {
        float salaryValue = float.Parse(Console.ReadLine());
        float benefitsValue = float.Parse(Console.ReadLine());

        float taxValue = 0;
        if (salaryValue >= 0 && salaryValue <= 1100)
        {
            taxValue = 0.05F * salaryValue;
        }
        else if (salaryValue > 1100 && salaryValue <= 2500)
        {
            taxValue = 0.10F * salaryValue;
        }
        else
        {
            taxValue = 0.15F * salaryValue;
        }
        
        float outputValue = salaryValue - taxValue + benefitsValue;
        Console.WriteLine(outputValue.ToString("0.00"));
    }
}