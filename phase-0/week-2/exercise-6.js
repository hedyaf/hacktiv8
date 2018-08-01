// 1. Melakukan Looping Menggunakan While:
console.log("LOOPING PERTAMA");
var numOne = 2;
while (numOne <= 20) {
  console.log(numOne + " - I love coding");
  numOne = numOne + 2;
}


console.log("LOOPING KEDUA");
var numTwo = 20;
while (numTwo > 0) {
  console.log(numTwo + " - I will become fullstack developer");
  numTwo = numTwo -2;
}


// 2. Melakukan Looping Menggunakan For:
console.log("LOOPING PERTAMA");
for (var i = 1; i<=20; i++) {
  console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
for (var i = 20; i>0; i--) {
  console.log(i + " - I will become fullstack developer");
}


// 3. Angka Ganjil dan Genap:
console.log("LOOPING PERTAMA");
for (i=1; i<=100; i++) {
  // console.log(i);
  if (i%2 === 0) {
    console.log(i + " (GENAP)");
  } else {
    console.log(i + " (GANJIL)");
  }
}

console.log("LOOPING KE-2: tambah 2");
for (i=1; i<=100; i++) {
  result = i + 2;
  if (result%3 === 0) {
    console.log(result + " kelipatan 3");
  } else {
    console.log("");
  }
}

console.log("LOOPING KE-3: tambah 5");
for (i=1; i<=100; i++) {
  result = i + 5;
  if (result%6 === 0) {
    console.log(result + " kelipatan 6");
  } else {
    console.log("");
  }
}

console.log("LOOPING KE-4: tambah 9");
for (i=1; i<=100; i++) {
  result = i + 9;
  if (result%10 === 0) {
    console.log(result + " kelipatan 10");
  } else {
    console.log("");
  }
}
