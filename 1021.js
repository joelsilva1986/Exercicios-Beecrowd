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

function main() {
    let valor = parseFloat(lines.shift())

    console.log("NOTAS:");
    valor = notasCem(valor)
    valor = notasCinquenta(valor);
    valor = notasVinte(valor);
    valor = notasDez(valor);
    valor = notasCinco(valor);
    valor = notasDois(valor);

    console.log("MOEDAS:");
    valor = moedasUmReal(valor);
    valor = moedasCinquentaCent(valor);
    valor = moedasVinteCincoCent(valor);
    valor = moedasDezCent(valor);
    valor = moedasCincoCent(valor);
    valor = moedasUmCent(valor);
}   

function notasCem(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 100)} nota(s) de R$ 100.00`);
    let restoNotasCem = (valorEntrada % 100).toFixed(2);
    return (restoNotasCem)
}

function notasCinquenta(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 50)} nota(s) de R$ 50.00`);
    let restoNotasCinquenta = (valorEntrada % 50).toFixed(2);
    return restoNotasCinquenta;
}

function notasVinte(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 20)} nota(s) de R$ 20.00`);
    let restoNotasVinte = (valorEntrada % 20).toFixed(2);
    return restoNotasVinte;
}

function notasDez(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 10)} nota(s) de R$ 10.00`);
    let restoNotasDez = (valorEntrada % 10).toFixed(2);
    return restoNotasDez;
}

function notasCinco(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 5)} nota(s) de R$ 5.00`);
    let restoNotasCinco = (valorEntrada % 5).toFixed(2);
    return restoNotasCinco;
}

function notasDois(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 2)} nota(s) de R$ 2.00`);
    let restoNotasDois = (valorEntrada % 2).toFixed(2);
    return restoNotasDois;
}

function moedasUmReal(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 1)} moeda(s) de R$ 1.00`);
    let restoMoedasUmReal = (valorEntrada % 1).toFixed(2);
    return restoMoedasUmReal;
}

function moedasCinquentaCent(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 0.50)} moeda(s) de R$ 0.50`);
    let restoMoedasCinquentaCent = (valorEntrada % 0.50).toFixed(2);
    return restoMoedasCinquentaCent;
}

function moedasVinteCincoCent(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 0.25)} moeda(s) de R$ 0.25`);
    let restoMoedasVinteCincoCent = (valorEntrada % 0.25).toFixed(2);
    return restoMoedasVinteCincoCent;
}

function moedasDezCent(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 0.10)} moeda(s) de R$ 0.10`);
    let restoMoedasDezCent = (valorEntrada % 0.10).toFixed(2);
    return restoMoedasDezCent;
}

function moedasCincoCent(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 0.05)} moeda(s) de R$ 0.05`);
    let restoMoedasCincoCent = (valorEntrada % 0.05).toFixed(2);
    return restoMoedasCincoCent;
}

function moedasUmCent(valorEntrada) {
    console.log(`${Math.floor(valorEntrada / 0.01)} moeda(s) de R$ 0.01`);
    let restoMoedasCinquentaCent = (valorEntrada % 0.01).toFixed(2);
    return restoMoedasCinquentaCent;
}

main();
/*
    let qtdeNotasCem = Math.floor(valorEntrada / 100);
    let restoNotasCem = (valorEntrada % 100);
    
    let qtdeNotasCinquenta = Math.floor(restoNotasCem / 50);
    let restoNotasCinquenta = (restoNotasCem % 50);
    
    let qtdeNotasVinte = Math.floor(restoNotasCinquenta / 20);
    let restoNotasVinte = (restoNotasCinquenta % 20);
    
    let qtdeNotasDez = Math.floor(restoNotasVinte / 10);
    let restoNotasDez = (restoNotasVinte % 10);
    
    let qtdeNotasCinco = Math.floor(restoNotasDez / 5);
    let restoNotasCinco = (restoNotasDez % 5);
    
    let qtdeNotasDois = Math.floor(restoNotasCinco / 2);
    let restoNotasDois = (restoNotasCinco % 2);

console.log(qtdeNotasCem,
    qtdeNotasCinquenta,
    qtdeNotasVinte,
    qtdeNotasDez,
    qtdeNotasCinco,
    qtdeNotasDois)

let qtdeMoedasUmReal = Math.floor(restoNotasDois / 1);
let restoMoedasUmReal = (restoNotasDois % 1);

let qtdeMoedasCinquenta = Math.floor(restoMoedasUmReal / 0.50);
let restoMoedasCinquenta = (restoMoedasUmReal % 0.50);

let qtdeMoedasVinteCinco = Math.floor(restoMoedasCinquenta / 0.25);
let restoMoedasVinteCinco = (restoMoedasCinquenta % 0.25);

let qtdeMoedasDez = Math.floor(restoMoedasVinteCinco / 0.10);
let restoMoedasDez = (restoMoedasVinteCinco % 0.10);

let qtdeMoedasCinco = Math.floor(restoMoedasDez / 0.05);
let restoMoedasCinco = (restoMoedasDez / 0.05);

let qtdeMoedasUm = Math.floor( restoMoedasDez / 0.01);

console.log(qtdeMoedasUmReal,
    qtdeMoedasCinquenta,
    qtdeMoedasVinteCinco,
    qtdeMoedasDez,
    qtdeMoedasCinco,
    qtdeMoedasUm)
    //console.log(qtdeMoedasUm)
*/