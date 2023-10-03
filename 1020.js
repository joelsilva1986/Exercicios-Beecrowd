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
    let idadeEmDias = parseInt(lines.shift());
    let restoAnos = parseInt((idadeEmDias % 365 ));
    let restoMeses = ((restoAnos % 30));

    let anos = calculaAnos(idadeEmDias);
    let meses = calculaMeses(restoAnos);
    let dias = calculaDias(restoMeses);

    mostraResultado(anos, meses, dias);
}

function calculaAnos(idadeDias) {
    let anos = parseInt(idadeDias / 365);

    return anos;
}

function calculaMeses(restAnos) {
    let meses = parseInt(restAnos / 30);

    return meses;
}

function calculaDias(restMeses) {
    let dias = restMeses

    return dias;
}

function mostraResultado(a, m, d) {
    console.log(a + " ano(s)");
    console.log(m + " mes(es)");
    console.log(d + " dia(s)");
}

main();








