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
    let palavra1 = lines.shift();
    let palavra2 = lines.shift();
    let palavra3 = lines.shift();

    verificaAnimal(palavra1, palavra2, palavra3);
}

function verificaAnimal(palavra1, palavra2, palavra3) {
    if (palavra1 === "vertebrado" && palavra2 === "ave" ) {
        if(palavra3 === "carnivoro") {
            console.log("aguia")
        }else if ( palavra3 === "onivoro") {
            console.log("pomba")
        }
    }else if (palavra1 === "vertebrado" && palavra2 === "mamifero") {
        if(palavra3 === "onivoro"){
            console.log("homem")
        } else if(palavra3 === "herbivoro"){
            console.log("vaca")
        }
    }
    
    if (palavra1 === "invertebrado" && palavra2 === "inseto" ) {
        if(palavra3 === "hematofago") {
            console.log("pulga")
        }else if ( palavra3 === "herbivoro") {
            console.log("lagarta")
        }
    }else if (palavra1 === "invertebrado" && palavra2 === "anelideo" ) {
        if(palavra3 === "hematofago") {
            console.log("sanguessuga")
        }else if ( palavra3 === "onivoro") {
            console.log("minhoca")
        }
    }
}

main();



