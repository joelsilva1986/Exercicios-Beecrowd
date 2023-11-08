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

    let mes = lines.shift();
    mes = parseInt(mes);

    let resultado = verificaMes(mes);
    console.log(resultado);
}

function verificaMes(mes) {

    let resultado = ''

    switch(mes) {
        case 1:
            resultado = "January"
            break;
        case 2:
            resultado = "February"
            break;
        case 3:
            resultado = "March"
            break;
        case 4:
            resultado = "April"
            break;
        case 5:
            resultado = "May"
            break;
        case 6:
            resultado = "June"
            break;
        case 7:
            resultado = "July"
            break;
        case 8:
            resultado = "August"
            break;
        case 9:
            resultado = "September"
            break;
        case 10:
            resultado = "October"
            break;
        case 11:
            resultado = "November"
            break;
        case 12:
            resultado = "December"
            break;
    }

    return (resultado);
}

main();



