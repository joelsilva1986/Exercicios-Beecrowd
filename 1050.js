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
    let DDD = lines.shift();
    DDD = parseInt(DDD)

    let resultado = localizacao(DDD);
    console.log(resultado);
}

function localizacao(DDD) {
    let destino = ""

    switch(DDD) {
        case 61:
            destino = "Brasilia"
            break;
        case 71:
            destino = "Salvador"
            break;
        case 11:
            destino = "Sao Paulo"
            break;
        case 21:
            destino = "Rio de Janeiro"
            break;
        case 32:
            destino = "Juiz de Fora"
            break;
        case 19: 
            destino = "Campinas"
            break;
        case 27:
            destino = "Vitoria"
            break;
        case 31:
            destino = "Belo Horizonte"
        default:
            destino = "DDD nao cadastrado"
    }
    
    return(destino)
}

main();


