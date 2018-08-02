function balikKata(kata) {
  result = "";
  for (i=kata.length-1; i >= 0; i--) {
    result += kata[i];
  } return result;
}

// OPTION 2:
// function balikKata(kata) {
//   return kata.split("").reverse().join("");
// }

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
