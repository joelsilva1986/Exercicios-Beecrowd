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
    let salario = lines.shift();
    salario = parseFloat(salario);

    if(salario <= 400.00) {
        reajusteQuinzePorCento(salario)
    }else if (salario > 400.00 && salario <= 800.00){
        reajusteDozePorCento(salario)
    }else if ( salario > 800.00 && salario <= 1200) {
        reajusteDezPorCento(salario)
    }else if ( salario > 1200.01 && salario <= 2000) {
        reajusteSetePorCento(salario)
    }else {
        reajusteQuatroPorCento(salario)
    }
}

function reajusteQuinzePorCento(salario) {
    let novoSalario = salario * 1.15;
    let valorReajuste = novoSalario - salario;
    let valorPercentual = ((novoSalario / salario) - 1 ) * (100)
    valorPercentual.toFixed(1)
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: ${valorPercentual.toFixed(0)} %`)
}

function reajusteDozePorCento(salario) {
    let novoSalario = salario * 1.12;
    let valorReajuste = novoSalario - salario;
    let valorPercentual = ((novoSalario / salario) - 1 ) * (100)
    valorPercentual.toFixed(1)
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: ${valorPercentual.toFixed(0)} %`)
}

function reajusteDezPorCento(salario) {
    let novoSalario = salario * 1.10;
    let valorReajuste = novoSalario - salario;
    let valorPercentual = ((novoSalario / salario) - 1 ) * (100)
    valorPercentual.toFixed(1)
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: ${valorPercentual.toFixed(0)} %`)
}

function reajusteSetePorCento(salario) {
    let novoSalario = salario * 1.07;
    let valorReajuste = novoSalario - salario;
    let valorPercentual = ((novoSalario / salario) - 1 ) * (100)
    valorPercentual.toFixed(1)
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: ${valorPercentual.toFixed(0)} %`)
}

function reajusteQuatroPorCento(salario) {
    let novoSalario = salario * 1.04;
    let valorReajuste = novoSalario - salario;
    let valorPercentual = ((novoSalario / salario) - 1 ) * (100)
    valorPercentual.toFixed(1)
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: ${valorPercentual.toFixed(0)} %`)
}

main();



