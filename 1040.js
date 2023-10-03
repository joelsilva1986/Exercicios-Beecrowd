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
    let [n1, n2, n3, n4] = lines.shift().split(" ");
    let exame = lines.shift();
    exame = parseFloat(exame);
    
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    n4 = parseFloat(n4);

    let resultadoMediaPonderada = calculaMediaPonderada(n1, n2, n3, n4);
     
    if (resultadoMediaPonderada >= 7.0){
        alunoAprovado(resultadoMediaPonderada);
    }else if (resultadoMediaPonderada < 5.0){
        alunoReprovado(resultadoMediaPonderada);
    }else if (resultadoMediaPonderada >= 5.0 || resultadoMediaPonderada <= 6.9){
        alunoEmExame(resultadoMediaPonderada, exame);
    }
     
    if(exame >=5.0 ){
        calculaExame(resultadoMediaPonderada, exame);
    }else if( exame < 5.0 ) {
        calculaExame(resultadoMediaPonderada, exame);
    }
}

function calculaMediaPonderada(N1, N2, N3, N4) {
    let mediaPonderada = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / (2 + 3 + 4 + 1);
    return mediaPonderada;
}

function alunoAprovado(mp) {
    console.log("Media: " + mp.toFixed(1));
    console.log("Aluno aprovado.");
}

function alunoReprovado(mp) {
    console.log("Media: " + mp.toFixed(1));
    console.log("Aluno reprovado.")
}

function alunoEmExame(mp, ex) {
    console.log("Media: " + mp.toFixed(1));
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + ex.toFixed(1))
}

function calculaExame(mp, ex) {
    let novaMedia = parseFloat(((mp + ex) / 2));

    if(novaMedia >= 5.0 || novaMedia <= 6.9 ){
       
        console.log("Aluno aprovado."),
        console.log("Media final: " + novaMedia.toFixed(1))
    }else {
        console.log("Aluno reprovado.");
        console.log("Media final: " + novaMedia.toFixed(1));
    }   
}

main();