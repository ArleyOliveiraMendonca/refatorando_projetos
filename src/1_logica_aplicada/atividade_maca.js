// As maçãs custam R$0,30 cada se forem compradas menos do que 12, e R$0,25
// se forem compradas 12 ou mais. Escreva um programa que leia o número de maçãs compradas,
// calcule e escreva o valor total da compra.
// siga boilerplate (modelo) para realizar o exercicio
// a funçao functionPreco irá receber um argumento (quantidade)




function functionPreco(quantidade) {
const precoMaca1 = 0.30
const precoDesconto = 0.25
const calculoPreco = quantidade*precoMaca1
const calculoDesconto = quantidade*precoDesconto
    if (quantidade >=12)
    {
     console.log(calculoDesconto)
      return calculoDesconto    
      
    }    
        else
        {
            console.log(calculoPreco)
           return calculoPreco
        }    
    }

functionPreco(13)
module.exports = functionPreco;