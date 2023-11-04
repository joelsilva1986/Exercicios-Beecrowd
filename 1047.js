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
    let [hInicial, mInicial, hFinal, mFinal] = lines.shift().split(" ");
   
    
    hInicial = parseInt(hInicial);
    mInicial = parseInt(mInicial);
    hFinal = parseInt(hFinal);
    mFinal = parseInt(mFinal);

    converteTempo(hInicial, mInicial, hFinal, mFinal)
}

function converteTempo(hi, mi, hf, mf) {
    let tempo, h, m;

    mi += hi * 60;
    mf += hf * 60;
    
    tempo = mf - mi;
    if (tempo <=0) {
        tempo += 24*60
    }
    
    h = tempo / 60;
    m = tempo % 60;

    console.log(`O JOGO DUROU ${Math.trunc(h)} HORA(S) E ${m} MINUTO(S)`)
}

main();



