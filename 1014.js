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
    let distancia = lines.shift();
    let consumo = lines.shift();
    
    distancia = parseInt(distancia);
    consumo = parseFloat(consumo);

    let valor = calculaTotal(distancia, consumo);
    console.log(valor + " km/l")
}

function calculaTotal(dist, cons){
    let total = ((dist) / cons);

    total = total.toFixed(3);
    
    return total
}

main();

