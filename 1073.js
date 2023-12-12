const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

function calcularQuadradosAteN(N) {
    for (let i = 2; i <= N; i += 2) {
      const quadrado = i * i;
      console.log(`${i}^2 = ${quadrado}`);
    }
  }
  
  const N = parseInt(lines.shift());
  
  calcularQuadradosAteN(N);