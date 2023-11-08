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

    if( salario >=0 && salario <=2000) {
        let resultado = taxaIsento();
        console.log(resultado);
    } else if (salario > 2000 && salario <= 3000) {
        let resultado = taxaOitoPorCento(salario);
        console.log(`R$ ${resultado.toFixed(2)}`)
    }else if (salario > 3000 && salario <=4500) {
        let resultado = taxaDezoitoPorCento(salario);
        console.log(`R$ ${resultado.toFixed(2)}`)
    }else if(salario > 4500){
        let resultado = taxaVinteOitoPorCento(salario)
        console.log(`R$ ${resultado.toFixed(2)}`)
    }
}

function taxaIsento() {
    let resultado = "Isento"
    return resultado
}

function taxaOitoPorCento(salario) {
    let resultado = (salario - 2000) * 0.08;
    return resultado;
}

function taxaDezoitoPorCento(salario) {
    let resultado = (salario - 3000) * 0.18 + (1000 * 0.08);
    return resultado;
}

function taxaVinteOitoPorCento(salario) {
    let resultado = (salario - 4500) * 0.28 + (1500 * 0.18) + (1000 * 0.08);
    return resultado;
}

main();

