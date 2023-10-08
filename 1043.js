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

    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);

    if( A < (B + C) && (B < (A + C)) &&(C < ( B + A)) ) {
        let resultadoPerimetro =   calculaPerimetro( A, B, C);
        console.log(`Perimetro = ${resultadoPerimetro}`);
    }else {
        let resultadoArea = calculaArea(A, B, C);
        console.log(`Area = ${resultadoArea}`);
    }
}

function calculaArea (a, b, c) {
    let area = ((a + b ) * c) / 2;
    return area.toFixed(1);
}

function calculaPerimetro (a, b, c) {
    let perimetro = (a + b + c);
    return perimetro.toFixed(1);
}

main ();