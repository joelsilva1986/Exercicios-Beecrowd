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
    let valorMinutos = parseInt(lines.shift());
    let restoHora = ( valorMinutos % 3600);
    let restoMinuto = ( restoHora % 60);

    let hora = calculaHoras(valorMinutos);
    let minuto = calculaMinutos(restoHora);
    let segundo = calculaSegundos(restoMinuto);

    mostraResultado(hora, minuto, segundo);    
}

function calculaHoras(valMinutos) {
    let horas = parseInt(valMinutos / 3600);

    return horas;
}

function calculaMinutos(restHora) {
    let minutos = parseInt( restHora / 60);

    return minutos;
}

function calculaSegundos(restMinuto) {
    let segundos = parseInt(restMinuto);

    return segundos;
}

function mostraResultado(h, m, s) {
    console.log(`${h}:${m}:${s}`)
}

main();
