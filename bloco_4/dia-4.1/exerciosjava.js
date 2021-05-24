/* Operações aritiméticas*/

let a = 20;
let b = 30;
let soma = (a+b);
let subtracao = (a-b);
let mutiplicacao = (a*b);
let divisao = (a/b);
let modulo = (a % b);
console.log(soma,subtracao,mutiplicacao,modulo)

/* maior de dois numeros*/

let num = 20;
let num2 = 30;

if (num > num2){
    console.log(num);
} else {
    console.log(num2);
}

/* maior de tres numeros*/

let num = 70;
let num2 = 100;
let num3 = 50;

if(num > num2 && num > num3){
    console.log(num);
} else if (num2 > num && num2 > num3){
    console.log(num2);
} else{
        console.log(num3);
    }

    /* retorne positivo ou negativo*/

let numero = -50;

if(numero >= 1){
    console.log("valor positivo");
}else {
    console.log("valor negativo");
}

/* retorno triangulo*/

let A = 4;
let B = 5;
let C = 5;

if(A < B && A < C && B === C){

    console.log(true);
}else{
    console.log(false);
}

/*  fazer uma progama que fala o movimento que ela faz conforme su nome*/

let pecaXadres = 'BISPO'
let peca = pecaXadres.toUpperCase() 
   
if(peca === 'REI'){

console.log('essa peça pode se movimentar para vertical, horizontal e as diagonais');

} else if ( peca === 'RAINHA'){
   console.log('essa peça pode se movimentar par vertical,horizontale e as diahonais sem pular as outras peças.') 
} else{
    console.log('peça invalida')
}

/* converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. */

let nota = 0;
if(nota >= 90 && nota <100){
    console.log('conseito : "A"');
} else if (nota >= 80 && nota < 90 ){
    console.log('Conseito : "B"');

} else if (nota >= 70 && nota < 80){
    console.log('Conseito : "C"');

} else if (nota >= 60 && nota < 70){
    console.log('Conseito : "D"');

} else if (nota >= 50 && nota < 60){
    console.log('Conseito : "E"')

}else if (nota < 50 && nota >= 0){
    console.log('Conseito : "F"') 

}else {
    console.log('nota sem classificação')
}

/* defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .*/
 
let num1 = 21;
let num2 = 45;
let num3 = 53;

if (num1 % 2 === 0 || num2 % 2 ===0 || num3 % 2 === 0){

    console.log(true);

} else{

    console.log(false);
}
/*defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
*/

let num1 = 20;
let num2 = 44;
let num3 = 50;

if (num1 % 2 != 0 || num2 % 2 !=0 || num3 % 2 != 0){

    console.log(true);

} else{

    console.log(false);
}

/*o custo de um produto e seu valor de venda.*/

let custoProduto = 50;
let valorVenda = 50;

if (custoProduto <= 0 || valorVenda <= custoProduto){
    console.log('Erro de entrada de valores.');
}else {

let custoTotal = ( custoProduto * 20 / 100) + custoProduto;

let lucro = (valorVenda-custoTotal)*1000;

console.log('O lucro foi de R$'+ lucro);
}

/*Incicio*/
/* Calular salario com desconto de inns e IR*/

let salario = 1000;
/*Salário bruto até R$ 1.556,94: alíquota de 8%*/
/*Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%*/
/*Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
*/
/*Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88*/

let liquotaInss1 = 0.08;
let liquotaInss2 = 0.09;
let liquotaInss3 = 0.11;
let liquotaInss4 = 570.88;
let valorInss1 = 0;
let valorInss2 = 0;
let valorInss3 = 0;
let valorInss4 = 0;

/*Liquita imposto de renda*/

let liquotaIr1= 0.075;
let deduz1 = 142.80;
let liquotaIr2 = 0.15;
let deduz2 = 354.80;
let liquotaIr3 = 0.225;
let deduz3= 636.13;
let liquotaIr4= 0.275;
let deduz4 = 869.36;
let valorIr1 = 0;

  if (salario <= 1556.94){
    valorInss1 = salario-(salario * liquotaInss1);
    console.log('Salario a receber é ' + valorInss1 + ' ,insento de imposto de renda');

} else if (salario >= 1556.95 && salario<= 2594.92){
    valorInss2 = salario - (salario*liquotaInss2);

        if (valorInss2 <= 1903.98){
            console.log('salrio a receber insento de IR é ' + valorInss2);

     }  else if (valorInss2 >= 1903.99 && valorInss2 <= 2826.65){
            valorIr1 = valorInss2 -((valorInss2 * liquotaIr1)-deduz1);
            console.log('valor a receber é ' + valorIr1)
        }

} else if (salario >= 2594.93 && salario <= 5189.82){
    valorInss3 = salario - (salario*liquotaInss3);
        
        if (valorInss3 >= 1903.99 && valorInss3 <= 2826.65){
         valorIr2 = valorInss3 - ((valorInss3*liquotaIr1)-deduz1);
         console.log( 'valor a receber é ' + valorIr2);
       
        }else if (valorInss3 >= 2826.65 && valorInss3 <= 3751.05){
         valorIr2 = valorInss3 - ((valorInss3* liquotaIr2)-deduz2)
         console.log('valor a receber é ' + valorIr2);

       }else if (valorInss3 >= 3751.06 && valorInss3 <= 4664.68){
        valorIr2 = valorInss3 - ((valorInss3* liquotaIr3)-deduz3)
        console.log('valor a receber é ' + valorIr2);
      }
} else if (salario > 5189.82){
    valorInss4 = salario - liquotaInss4;
        
        if (valorInss4 >= 4664.69){
         salarioLiq = valorInss4 - ((valorInss4*liquotaIr4)-deduz4);
         console.log( 'valor a receber é ' + salarioLiq);
        }
}      
       /* que trampo fim*/