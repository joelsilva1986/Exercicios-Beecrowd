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
    let [A, B, C] = lines.shift().split(" ");

    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);

    let aux;

    if( A < B) {
        aux = A;
        A = B;
        B = aux;
    }
    if (A < C) {
        aux = A;
        A = C
        C = aux;
    }
    if (B < C) {
        aux = B;
        B = C;
        C = aux;
    }

    tiposDeTriangulo (A, B, C)
}

function tiposDeTriangulo( a, b, c) {
    if( a >= (b + c)){
        console.log("NAO FORMA TRIANGULO");
    }else if( (a**2) == (b**2 + c**2)){
        console.log("TRIANGULO RETANGULO")
    }else if( (a**2) > (b**2 + c**2)){
        console.log("TRIANGULO OBTUSANGULO");
    }else if((a**2) < (b**2 + c**2)){
        console.log("TRIANGULO ACUTANGULO");
    }
    if( (a == b && b == c)) {
        console.log("TRIANGULO EQUILATERO")
    }else if((a == b || b == c)){
        console.log("TRIANGULO ISOSCELES")
    }
}

main();

