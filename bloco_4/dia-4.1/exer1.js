let num = 20;
let num2 = 30;
let soma = num+num2;
console.log(soma)

const name = 'Paulo';
const birthCity = 'Tupã';
let birthYear = 1980;

console.log(name, birthCity ,birthYear);

birthYear = 2030;

console.log(name, birthCity ,birthYear);

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(patientInfo)

let base = 5;
let altura = 8;
let area = base *altura;
console.log(area)  

let perimitro = 5+10+5+10;
console.log(perimitro);

/* exer notas  if else*/

let nota = 85;
if(nota >= 80){
  console.log("voce foi aprovado");
}
else if (nota >= 60){
  console.log("voce esta na lista de espera");
} else {
  console.log("voce foi reprovado");
}
/* exer switch case*/

let lista = "aprovado"
switch (lista){
case  "aprovado":
console.log("voce esta na lista ");
break;

case "espera":
console.log("voce esta na lista");
break;

case "reprovado":
console.log("voce esta reprovado")
break;

default:
  console.log("voce naop fez o teste")
}