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
    let valor1 = lines.shift();
    let valor2 = lines.shift();
    let valor3 = lines.shift();
    let valor4 = lines.shift();
    let valor5 = lines.shift();
      
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    valor3 = parseInt(valor3);
    valor4 = parseInt(valor4);
    valor5 = parseInt(valor5);

    if(valor1 < 0 ){
        valor1 *= (-1)
    }
    if(valor2 < 0 ){
        valor2 *= (-1)
    }
    if(valor3 < 0 ){
        valor3 *= (-1)
    }
    if(valor4 < 0 ){
        valor4 *= (-1)
    }
    if(valor5 < 0 ){
        valor5 *= (-1)
    }

    let resultado = verificaPar(valor1, valor2, valor3, valor4, valor5)
    console.log(`${resultado} valores pares`)
}

function verificaPar(valor1, valor2, valor3, valor4, valor5){
    let resultado = 0;

    let i = 1;

        do {
            i += 1;
            if(valor1 % 2 == 0) {
                resultado ++
            }
            i += 1;
            if(valor2 % 2 == 0) {
                resultado ++
            }
            i += 1
            if(valor3 % 2 == 0) {
                resultado ++
            }
            i += 1
            if(valor4 % 2 == 0) {
                resultado ++
            }
            i += 1
            if(valor5 % 2 == 0) {
                resultado ++
            }
            i += 1
        } while (i <= 5 )

    return resultado;
}

main();


    






    

