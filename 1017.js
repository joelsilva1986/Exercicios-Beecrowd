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
//let A = parseInt(lines.shift()); 

function main () {
    let tempoViagem = lines.shift();
    let velocidadeMedia = lines.shift();

    let autonomiaAutomovel = 12; 
    
    tempoViagem = parseInt(tempoViagem);
    velocidadeMedia = parseInt(velocidadeMedia);

    let resultadoDistancia = calculaDistancia(velocidadeMedia, tempoViagem)
    let resultadoLitros = calculaLitros(autonomiaAutomovel, resultadoDistancia);

    console.log(resultadoLitros.toFixed(3));
}

function calculaDistancia(velocidade, tempo) {
    //Regra de 3: Se em uma hora o carro anda x km, em y horas ele andara??
    let distancia = (velocidade * tempo) 
    return distancia;
}

function calculaLitros (autonomia, distancia) {
    
    let qtdeLitros = distancia / autonomia;

    return qtdeLitros;
}

main();











