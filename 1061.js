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
    let d1 = parseInt(lines.shift().split(" ")[1]);
    let [h1, m1, s1] = (lines.shift().split(":").map(Number));
    let t1 = s1 + (m1*60) + (h1*60*60) + (d1*24*60*60)
    
    let d2 = parseInt(lines.shift().split(" ")[1]);
    let [h2, m2, s2] = (lines.shift().split(":").map(Number)); 
    let t2 = s2 + (m2*60) + (h2*60*60) + (d2*24*60*60)

    calculaTempo(t1, t2)
}

function calculaTempo(t1, t2) {
    let dif = t2 - t1;
    let d = dif / (24*60*60);
    dif = dif % (24*60*60);
    
    let h = dif / (60*60);
    dif = dif % (60*60);
    
    let m = dif / 60;
    dif = dif % 60;
    
    let s = dif;

    console.log(`${Math.trunc(d)} dia(s)`)
    console.log(`${Math.trunc(h)} hora(s)`)
    console.log(`${Math.trunc(m)} minuto(s)`)
    console.log(`${Math.trunc(s)} segundo(s)`)
}

main();





