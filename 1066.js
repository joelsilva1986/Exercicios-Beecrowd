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
    let valor1 = lines.shift();
    let valor2 = lines.shift();
    let valor3 = lines.shift();
    let valor4 = lines.shift();
    let valor5 = lines.shift();
        
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    valor3 = parseInt(valor3);
    valor4 = parseInt(valor4);
    valor5 = parseInt(valor5);

    let contaPositivo = verificaPositivo(valor1, valor2, valor3, valor4, valor5);
    let contaNegativo = verificaNegativo(valor1, valor2, valor3, valor4, valor5);
    let contaPar = verificaPar(valor1, valor2, valor3, valor4, valor5);
    let contaImpar = verificaImpar(valor1, valor2, valor3, valor4, valor5);

    console.log(`${contaPar} valor(es) par(es)`)
    console.log(`${contaImpar} valor(es) impar(es)`)
    console.log(`${contaPositivo} valor(es) positivo(s)`)
    console.log(`${contaNegativo} valor(es) negativo(s)`)
}




function verificaPositivo (valor1, valor2, valor3, valor4, valor5) {
    let contaPositivo = 0;
    let i = 1;
    
    do {
        i += 1
        if(valor1 > 0) {
            contaPositivo += 1
        }
        i += 1
        if(valor2 > 0) {
            contaPositivo += 1
        }
        i += 1
        if(valor3 > 0) {
            contaPositivo += 1
        }
        i += 1
        if(valor4 > 0) {
            contaPositivo += 1
        }
        i += 1
        if(valor5 > 0) {
            contaPositivo += 1
        }
    } while (i <= 5)
    
    return contaPositivo;
}

function verificaNegativo (valor1, valor2, valor3, valor4, valor5) {
    let contaNegativo = 0;
    let i = 1;
    
    do {
        i += 1
        if(valor1 < 0) {
            contaNegativo += 1
        }
        i += 1
        if(valor2 < 0) {
            contaNegativo += 1
        }
        i += 1
        if(valor3 < 0) {
            contaNegativo += 1
        }
        i += 1
        if(valor4 < 0) {
            contaNegativo += 1
        }
        i += 1
        if(valor5 < 0) {
            contaNegativo += 1
        }
    } while (i <= 5)
    
   return contaNegativo;
}

function verificaPar (valor1, valor2, valor3, valor4, valor5) {
    let contaPar = 0;

    if(valor1 < 0 ){
        valor1 *= (-1)
    }
    if(valor2 < 0 ){
        valor2 *= (-1)
    }
    if(valor3 < 0 ){
        valor3 *= (-1)
    }
    if(valor4 < 0 ){
        valor4 *= (-1)
    }
    if(valor5 < 0 ){
        valor5 *= (-1)
    }
    
    if(valor1 % 2 == 0){
        contaPar += 1;
    }
    if(valor2 % 2 == 0){
        contaPar += 1;
    }
    if(valor3 % 2 == 0){
        contaPar += 1;
    }
    if(valor4 % 2 == 0){
        contaPar += 1;
    }
    if(valor5 % 2 == 0){
        contaPar += 1;
    }
    
    return contaPar;
}

function verificaImpar (valor1, valor2, valor3, valor4, valor5) {
    let contaImpar = 0;

    if(valor1 < 0 ){
        valor1 *= (-1)
    }
    if(valor2 < 0 ){
        valor2 *= (-1)
    }
    if(valor3 < 0 ){
        valor3 *= (-1)
    }
    if(valor4 < 0 ){
        valor4 *= (-1)
    }
    if(valor5 < 0 ){
        valor5 *= (-1)
    }
    
    if(valor1 % 2 != 0){
        contaImpar += 1;
    }
    if(valor2 % 2 != 0){
        contaImpar += 1;
    }
    if(valor3 % 2 != 0){
        contaImpar += 1;
    }
    if(valor4 % 2 != 0){
        contaImpar += 1;
    }
    if(valor5 % 2 != 0){
        contaImpar += 1;
    }

    return contaImpar;
}

main();











