const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let A = Math.floor(lines.shift()); 

let [num1, num2, num3] = lines.shift().split(" ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

let aux1;
let aux2 ;
let aux3 ;

console.log("antes do if")
//aux1
if(num1 > num2){
    aux1 = num2;
} 
if(num1 < num2){
    aux1 = num1;
}
if(num1 > num3){
    aux1 = num3;
}
if(num1 < num3){
    aux1 = num1
}

//aux2

if(num2 > num1){
    aux2 = num1;
}
if(num2 < num1){
    aux2 = num2;
}

//aux3
console.log(aux1, aux2, aux3)

