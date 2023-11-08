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
    let valor6 = lines.shift();
    
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    valor3 = parseInt(valor3);
    valor4 = parseInt(valor4);
    valor5 = parseInt(valor5);
    valor6 = parseInt(valor6);

    let resultados = contaPositivos(valor1, valor2, valor3, valor4, valor5, valor6);
    console.log(`${resultados} valores positivos`);
}

function contaPositivos(valor1, valor2, valor3, valor4, valor5, valor6) {

    let contPositivos = 0;
    let i = 1;

        do {
            i += 1;
            if(valor1 > 0) {
                contPositivos ++
            }
            i += 1;
            if(valor2 > 0) {
                contPositivos ++
            }
            i += 1
            if(valor3 > 0) {
                contPositivos ++
            }
            i += 1
            if(valor4 > 0) {
                contPositivos ++
            }
            i += 1
            if(valor5 > 0) {
                contPositivos ++
            }
            i += 1
            if(valor6 > 0) {
                contPositivos ++
            }
        } while (i <= 6 )

    return contPositivos;
}

main();

