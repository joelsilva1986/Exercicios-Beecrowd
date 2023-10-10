let [A, B, C] = lines.shift().split(" ");
let aux;

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

if( A < B) {
    aux = A;
    A = B;
    B = aux;
}
if (A < C) {
    aux = A;
    A = C
    C = aux;
}
if (B < C) {
    aux = B;
    B = C;
    C = aux;
}

if( A >= (B + C)){
    console.log("NAO FORMA TRIANGULO");
}else if( (A**2) == (B**2 + C**2)){
    console.log("TRIANGULO RETANGULO")
}else if( (A**2) > (B**2 + C**2)){
    console.log("TRIANGULO OBTUSANGULO");
}else if((A**2) < (B**2 + C**2)){
    console.log("TRIANGULO ACUTANGULO");
}else if( (A == B && B == C)) {
    console.log("TRIANGULO EQUILATERO")
}else if((A == B || B == C)){
    console.log("TRIANGULO ISOCELES")
}