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
    let [x, y] = lines.shift().split(" ");

    x = parseFloat(x);
    y = parseFloat(y);

    identificaEixo(x, y);
}

function identificaEixo(X, Y) {
    if(X > 0 && Y > 0){
        console.log("Q1");
    }else if( X > 0 && Y < 0){
        console.log("Q4");
    }else if( X < 0 && Y > 0 ){
        console.log("Q2");
    }else if ( X < 0 && Y < 0){
        console.log("Q3");
    }else if( X === 0 && (Y > 0 || Y < 0)) {
        console.log("Eixo Y");
    }else if( Y === 0 && (X > 0 || X < 0)) {
        console.log("Eixo X");
    }else {
        console.log("Origem")
    }
}

main();

    




