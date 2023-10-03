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

function entradaDados () {
    let nomeVendedor = lines.shift();
    let salarioFixo = lines.shift();
    let totalVendas = lines.shift();

    nomeVendedor = String(nomeVendedor);
    salarioFixo = parseFloat(salarioFixo);
    totalVendas = parseFloat(totalVendas);

    total(salarioFixo, totalVendas);
}

function total(salarioFixo, totalVendas) {
    let comissao = 0.15;
    let total = salarioFixo + (totalVendas * comissao);

    return (console.log(`TOTAL = R$ ${total.toFixed(2)}`))
}

entradaDados();