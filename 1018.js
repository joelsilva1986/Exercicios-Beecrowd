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

function main() {
    let n1 = 100;
    let n2 = 50;
    let n3 = 20;
    let n4 = 10;
    let n5 = 5;
    let n6 = 2;
    let n7 = 1;

    let N = parseInt(lines.shift());

    console.log(N)
    N = notasDeCem(N, n1);
    N = notasDeCinquenta(N, n2);
    N = notasDeVinte(N, n3);
    N = notasDeDez(N, n4);
    N = notasDeCinco(N, n5);
    N = notasDeDois(N, n6);
    N = notasDeUm(N, n7);
    
   }

function notasDeCem(valor, cem) {
    console.log(`${Math.floor((valor / cem))} nota(s) de R$ 100,00`);
    let resultado = valor %= cem 
    return (resultado);
}

function notasDeCinquenta(valor, cinquenta) {
    console.log(`${Math.floor((valor / cinquenta))} nota(s) de R$ 50,00`);
    let resultado = valor %= cinquenta 
    return (resultado);
}

function notasDeVinte(valor, vinte) {
    console.log(`${Math.floor((valor / vinte))} nota(s) de R$ 20,00`);
    let resultado = valor %= vinte
    return (resultado);
}

function notasDeDez(valor, dez) {
    console.log(`${Math.floor((valor / dez))} nota(s) de R$ 10,00`);
    let resultado = valor %= dez 
    return (resultado);
}

function notasDeCinco(valor, cinco) {
    console.log(`${Math.floor((valor / cinco))} nota(s) de R$ 5,00`);
    let resultado = valor %= cinco 
    return (resultado);
}

function notasDeDois(valor, dois) {
    console.log(`${Math.floor((valor / dois))} nota(s) de R$ 2,00`);
    let resultado = valor %= dois 
    return (resultado);
}

function notasDeUm(valor, um) {
    console.log(`${Math.floor((valor / um))} nota(s) de R$ 1,00`);
    let resultado = valor %= um 
    return (resultado);
}

main();



