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
    let [hInicial, hFinal] = lines.shift().split(" ");

    hInicial = parseInt(hInicial);
    hFinal = parseInt(hFinal);

    let resultado = calculaTempoJogo(hInicial, hFinal);
    console.log(resultado)

}

function calculaTempoJogo(hInit, hFim) {

    let tempoJogo;

    if (hInit < hFim){
        tempoJogo = hFim - hInit
        return(`O JOGO DUROU ${tempoJogo} HORA(S)`)
    }else{
        tempoJogo = (24 - hInit) + hFim
        return(`O JOGO DUROU ${tempoJogo} HORA(S)`)
    }
}

main();



