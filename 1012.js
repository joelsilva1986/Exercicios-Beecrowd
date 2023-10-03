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

function dadosEntrada() {
    let [valorA, valorB, valorC ] = lines.shift().split(" ");
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);
    valorC = parseFloat(valorC);

    let aTriangulo = areaTriangulo(valorA, valorC);
    let aCirculo = areaCirculo(valorC);
    let aTrapezio = areaTrapezio(valorA, valorB, valorC);
    let aQuadrado = areaQuadrado(valorB);
    let aRetangulo = areaRetangulo(valorA, valorB);
    
    mostraDados([
        aTriangulo, 
        aCirculo, 
        aTrapezio, 
        aQuadrado,
        aRetangulo
    ])
  
}

function areaTriangulo(valorA, valorC) {
    let area = (valorA * valorC) / 2;
  
    return area;
}

function areaCirculo(valorC) {
    let pi = 3.14159;
    let area = (pi * (valorC ** 2));

    return area;
}

function areaTrapezio(valorA, valorB, valorC) {
    let area = ((valorA + valorB) * valorC) / 2;

    return area;
}

function areaQuadrado(valorB) {
    let area = valorB * valorB;

    return area;
}

function areaRetangulo (valorA, valorB) {
    let area = valorA * valorB;

    return area;
}

function mostraDados ([a, b, c, d, e]) {
    console.log("TRIANGULO: " + a.toFixed(3));
    console.log("CIRCULO: " + b.toFixed(3));
    console.log("TRAPEZIO: " + c.toFixed(3));
    console.log("QUADRADO: " + d.toFixed(3));
    console.log("RETANGULO: " + e.toFixed(3));
}

dadosEntrada();

