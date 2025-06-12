/*let bruna = 6.5;
let carla = 8;
let soma = bruna + carla
console.log("A soma é: " + soma)
console.log("-------------------------")
let pedro = 300;
let joão = 900;
let multiplicação = 300 - 900
let subtração = (pedro + joão)
console.log("A sutrcação de Pedro e João é:"+ subtração+"R$")
console.log("----------------------------")
let arroz= 5;
let macarrão= 3;
let Ovalorarmazenamento= arroz*macarrão
console.log("A multiplicação é"+Ovalorarmazenamento+"R$")
console.log("--------------------------------")
let crechê = 30;
let crianças = 20;
let entregadepipocas=crechê/crianças
console.log("A divisão é :"+entregadepipocas+"R$")
console.log("--------------------------------")
)let salario = Number(prompt(3000)
let mesestrabalhados = Number(prompt ("5"))
let décimo = salario/12*mesestrabalhados
console.log("Seu décimo é:  " + décimo)
let x = Number(prompt("Digite um numéro"))
console.log(x)
let salario = Number(prompt("digite o seu salrio:"))
if (salario < 500){
salario = (15/100*salario)+salario
  alert("Seu novo salario é: "+salario)
} else if (salario >=500 && salario<=1000){
    salario = (10/100*salario)+salario
    alert ("Seu novo salario é: "+salario)
} else{
    salario = (5/100*salario)+salario
    alert ("Seu novo salario é: "+salario)
    }
let idade = Number(prompt("digite sua idade:"))
  if (idade<12){
    alert ("Seu conteúdo é infantil")
  }
  else if( idade>=12 && idade<=17){
    alert("Seu conteúdo é Teen")
  }
  else if( idade>=18 && idade<=60){
    alert("Seu conteúdo é adulto")
  }
  else{
    alert("Seu conteúdo é Sênior")
  }
  let pontuacao = Number(prompt("digite sua pontuação"))
 if (pontuacao=0 && pontuacao<=1000){
   alert("Seu nivel é novato e o seu bônus é de 100XP")
  }
  else if (pontuacao>=1001 && pontuacao<=5000){
    alert("Seu nivel é aprendiz e o seu bônus é de 500XP")
  }
  else if ( pontuacao>=5001 && pontuacao<=10000){
   alert("Seu nível é Expert e o seu bônus é de 1000PX")
  }
  else{
    alert("SEu nível é mestre e o seu bônus é de 2000PX")
}
 let planobasico= 25;
 let planopremium= 48;
 let planoultra= 60;
 let telastresaquatro= 5;
 let telasmaisdequatro= 7.50;

 let tipodeassinatura = prompt("Digite o tipo da assinatura que você deseja")
 let quantitelas = prompt(" Digite quantas telas você terá:")
 if (tipodeassinatura == "básico"){
   if(quantitelas>=3 && quantitelas<=4){
      alert("O valor final do seu plano é R$ "+(planobasico+telastresaquatro))
   } else if (quantitelas>=3 && quantitelas<=4){
     alert("O valor final do seu plano é R$ "+(telasmaisdequatro))
   } else {
     alert("O seu plano será R$ "+planobasico)
   }
   }
 else if (tipodeassinatura == "premium"){
   if(quantitelas>=3 && quantitelas<=4){
      alert("O valor final do seu plano é R$ "+(planopremium+telastresaquatro))
   } else if (quantitelas>=3 && quantitelas<=4){
     alert("O valor final do seu plano é R$ "+(planopremium+telasmaisdequatro))
   } else {
     alert("O seu plano será R$ "+(planopremium))
   }
   }
 else{
   if(quantitelas>=3 && quantitelas<=4){
      alert("O valor final do seu plano é R$ "+(planoultra+telastresaquatro))
   } else if (quantitelas>=3 && quantitelas<=4){
     alert("O valor final do seu plano é R$ "+(planoultra+telasmaisdequatro))
   } else {
     alert("O seu plano será R$ "+(planopremium))
    }
     }
let daysOfWeek = ["Caio", "Samuel"];
console.log(daysOfWeek[1])
console.log(daysOfWeek.length)
let listdiver = ["Caio",1,2.5,"Escola",false]
console.log(listdiver[3])
let nomedoaluno = prompt("Digite o nome do novo aluno: ")
daysOfWeek.push(nomedoaluno)
daysOfWeek.unshift("Miguel")
daysOfWeek.pop()
daysOfWeek.shift()
daysOfWeek.sort()
alert("Atualmente os alunos da escola são"+daysOfWeek)
alert(daysOfWeek.indexOf("Caio"))
// Sem parâmetro
function saudar(){
    alert("Desejp uma boa navegação no nosso Site!")
}
saudar()
//função com retorno
function dobrarNumero(numero){
  return numero * 2
}
let resultado = dobrarNumero(25)
alert("O cálculo do dobro do numero é" + resultado)
//Com Parâmetro
function  cumprimentar(nome){
    alert("Olá, "+nome+" como está seu dia?")
}  
let nomedoaluno = prompt("Digite o seu nome jovem: ")
cumprimentar(nomedoaluno)
//Recursiva
function contagemregressiva(numero){
   console.log(numero)
   if(ny-numero ===0){
   console.log("Chegou")
   return;
   }
   contagemregressiva(numero-1)
}
  contagemregressiva(10)*/
