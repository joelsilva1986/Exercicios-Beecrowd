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
    let [num1, num2] = lines.shift().split(" ");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let resultado = calculaValorLanche(num1, num2);

    console.log(resultado)
}

function calculaValorLanche(n1, n2) {
    switch(n1) {
        case 1:
            let cachorroQuente = n2 * 4.00;
            return (`Total: R$ ${cachorroQuente.toFixed(2)}`);
        case 2:
            let xSalada = n2 * 4.50;
           return (`Total: R$ ${xSalada.toFixed(2)}`);
        case 3:
            let xBacon = n2 * 5.00;
            return (`Total: R$ ${xBacon.toFixed(2)}`);
        case 4:
            let torradaSimples = n2 * 2.00;
            return (`Total: R$ ${torradaSimples.toFixed(2)}`);
        case 5:
            let refrigerante = n2 * 1.50;
            return (`Total: R$ ${refrigerante.toFixed(2)}`);
    }
}

main();





/*
if(num1 === 1){
    let cachorroQuente = num2 * 4.00;
    console.log(`Total: R$ ${cachorroQuente.toFixed(2)}`)
}else if(num1 === 2){
    let xSalada = num2 * 4.50;
    console.log(`Total: R$ ${xSalada.toFixed(2)}`)
}else if(num1 === 3){
    let xBacon = num2 * 5.00;
    console.log(`Total: R$ ${xBacon.toFixed(2)}`)
}else if(num1 === 4){
    let torradaSimples = num2 * 2.00;
    console.log(`Total: R$ ${torradaSimples.toFixed(2)}`)
}else if(num1 === 5){
    let refrigerante = num2 * 1.50;
    console.log(`Total: R$ ${refrigerante.toFixed(2)}`)
}
*/