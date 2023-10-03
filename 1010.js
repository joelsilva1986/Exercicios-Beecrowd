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

function dadosPeca1() {
    let [codPeca1, qtdePeca1, valorPeca1] = lines.shift().split(" ")

    codPeca1 = parseInt(codPeca1);
    qtdePeca1 = parseInt(qtdePeca1);
    valorPeca1 = parseFloat(valorPeca1);

    let total1 = (qtdePeca1 * valorPeca1);
    return total1
}

function dadosPeca2() {
    let [codPeca2, qtdePeca2, valorPeca2] = lines.shift().split(" ")

    codPeca2 = parseInt(codPeca2);
    qtdePeca2 = parseInt(qtdePeca2);
    valorPeca2 = parseFloat(valorPeca2);

    let total2 = (qtdePeca2 * valorPeca2);
    return total2
}

function valorPagar() {
    let total = (dadosPeca1()) + (dadosPeca2())

    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
}

valorPagar();

