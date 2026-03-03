//16 - Criar um Programa que mostre qual tipo de triângulo de acordo com seus lados(Equilátero, Isóceles Escalneo)
let lado1 = 2;
lat lado2 = 3;
let lado3 = 2;

if (lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 >lado1) {

        if (lado1 === lado2 && lado2 === lado3) {
        console.log("triângulo equilátero");
      } else if (lado1 === lado2 ||
                 lado2 === lado3 ||
                 lado3 === lado1 ) {
                    console.log("triângulo isóceles");
                 } else {
console.log("triãngulo escaleno");

    }
    
    } else {
    console.log("os valores informados não formam um triângulo.");
  }
    