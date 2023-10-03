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
//let A = parseInt(lines.shift());  

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);
valor4 = parseInt(valor4);

let diferenca = (valor1 * valor2) - (valor3 * valor4)

console.log(`DIFERENCA = ${diferenca}`)