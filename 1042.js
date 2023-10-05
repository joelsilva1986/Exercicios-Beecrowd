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

function main () {
    let [A, B, C] = lines.shift().split(" ");

    A = parseInt(A);
    B = parseInt(B);
    C = parseInt(C);
    
    let X = A;
    let Y = B;
    let Z = C;

    ordenaValor(X, Y, Z);
    console.log(A);
    console.log(B);
    console.log(C);
    
}

function ordenaValor(x, y, z) {

    let aux;

    if(x > y){
        aux = x;
        x = y;
        y = aux;
    } 
    if(x > z){
        aux = x;
        x = z;
        z = aux;
    }
    if(y > z){
        aux = y;
        y = z;
        z = aux;
    }

    console.log(x);
    console.log(y);
    console.log(z);
    console.log();
    
}

main ();
