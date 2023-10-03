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
   
    let [num1, num2, num3, num4] = lines.shift().split(" ")
    
     num1 = parseInt(num1);
     num2 = parseInt(num2);
     num3 = parseInt(num3);
     num4 = parseInt(num4);

    
    verificaCondicao(num1, num2, num3, num4);

}

function verificaCondicao(A, B, C, D) {

    if (
            ((B > C) && (D > A)) && 
            ((C + D) > (A + B)) && 
            ((C > 0) && (D > 0)) && 
            (A % 2 === 0)
        ){
        console.log("Valores aceitos")
    }else {
        console.log("Valores nao aceitos")
    }
}

main();
