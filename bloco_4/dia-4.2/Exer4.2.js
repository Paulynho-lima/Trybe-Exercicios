/*exer1*/
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/*exer2*/
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portifólio');

console.log(indexOfPortfolio);


/*exer3*/
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('contato')

console.log(menu);

/*exemplo tabuada*/

let num = 6;
for (let idex = 1; idex <= 10; idex+=1){
console.log('****')  
console.log('')  
console.log(num + ' x ' + idex + ' = ' + num * idex);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index =0; index < groceryList.length; index +=1){

    console.log('eu goto de: ' + groceryList[index]);

}

/*exemplo for / of*/

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
 for (let nome of names){

    console.log(nome);
 }

 /*Aprofunde seus conhecimentos exercico*/

 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 for(let index = 0; index< numbers.length; index +=1){

    console.log(numbers[index]);
 }

 /* exercico 2*/

let soma = 0;
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index =0;index< numbers.length;index+=1){
    
   soma  = soma+= numbers[index] ;
    console.log(soma);
}


let soma = 0;
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index =0;index< numbers.length;index+=1){
    
     soma = soma+= numbers[index] ;
    media = soma / numbers.length;

    if (media > 20){
        console.log('valor maior que 20: ' + media)
    }else {

    console.log(' valor menor ou igual a 20: '+ media);
    }
}

/* exer  maior numero */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index +=1){

    if( numbers[index] > soma){
        soma = numbers[index]

 } 
} 
  console.log(soma)

  /*mumeros impar*/

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let result = 0;
  
  for(let index = 0; index < numbers.length; index +=1){
     if( numbers[index] % 2 !== 0 ){
      result += 1;
      
     }
  }
  console.log(result);
  if (result === 0){
      console.log('nao existe numeros')
  }

  /*menor numero no array*/

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let result = numbers[0];
  for(let index = 1;index < numbers.length; index +=1){
      if (numbers[index] < result){
          result = numbers[index];

      }
    
  }
         console.log(result);

         