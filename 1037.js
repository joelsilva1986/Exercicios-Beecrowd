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
    
    let numero = parseFloat(lines.shift());

    verificaIntervalo(numero);

}

function verificaIntervalo(num) {
    if(num >= 0 && num <=25) {
        console.log("Intervalo [0,25]");
    }else if( num > 25 && num <= 50){
        console.log("Intervalo (25,50]");
    }else if( num > 50 && num <= 75){
        console.log("Intervalo (50,75]");
    }else if( num > 75 && num <= 100){
        console.log("Intervalo (75,100]")
    }else{
        console.log("Fora de intervalo")
    }
}

main();
