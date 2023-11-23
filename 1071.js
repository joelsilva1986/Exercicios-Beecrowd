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

function main(){
    let num1 = parseInt(lines.shift());
    let num2 = parseInt(lines.shift());

    let resultado = soma(num1, num2);
    console.log(resultado);
}

function soma(num1, num2){
    let soma = 0;

    if( num1 < num2) {
        for( let i = num1 + 1; i < num2; i++){
            if( i % 2 != 0) {
                soma += i
            }
        }
    }else {
        for( let i = num2 + 1; i < num1; i++){
            if( i % 2 != 0) {
                soma += i
            }
        }
    }

    return soma;
}

main();