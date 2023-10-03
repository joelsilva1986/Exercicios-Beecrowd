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
    let [x1, y1] = lines.shift().split(" ");
    let [x2, y2] = lines.shift().split(" ");
    
    x1 = parseFloat(x1);
    y1 = parseFloat(y1);
    x2 = parseFloat(x2);
    y2 = parseFloat(y2);

    let resultado = calculaDistancia(x1, y1, x2, y2);

    console.log(resultado);
}

function calculaDistancia(a1, b1, a2, b2) {
    let distancia = (((a2 - a1)**2) + ((b2 - b1)**2));

    distancia = Math.sqrt(distancia);
    distancia = parseFloat(distancia.toFixed(4));

    return distancia;
}

main();






