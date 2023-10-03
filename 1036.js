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
    let [num1, num2, num3] = lines.shift().split(" ");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    
    const DELTA = ((num2**2) - (4 * (num1 * num3)));

    calculaRaizes(num1, num2, DELTA);
}

function calculaRaizes(n1, n2, delt) {
    if(delt < 0 || n1 === 0 || delt === 0 ) {
        console.log("Impossivel calcular")
    }else{
        let r1 = (-n2 + (Math.sqrt(delt))) / (2 * n1)
        let r2 = ( -n2 - (Math.sqrt(delt))) / (2 * n1)
        
        console.log("R1 = " + r1.toFixed(5))
        console.log("R2 = " + r2.toFixed(5))
    }
}

main();




