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
