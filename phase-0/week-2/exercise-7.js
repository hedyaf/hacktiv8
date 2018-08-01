// 1. Menyusun Barisan Bintang:
var rows1 = 5;
while (rows1 > 0) {
  console.log("*");
  rows1--;
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
// OPTION 1: make 5 rows first, then fill in every rows
var rows2 = 5;

for (i=0; i<rows2; i++) {
  result = "";
  for (x=0; x<rows2; x++) {
    result += "*";
  }
  console.log(result);
}

// OPTION 2: make 1 line first, then times 5 rows
// var rows2b = 5;
// var result = "";
//
// for (i=0; i<rows2b; i++) {
//   result += "*";
// } for (x=0; x<rows2b; x++) {
//     console.log(result);
// }


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping:
// OPTION 1:
var rows3 = 5;

for (i=1; i<=rows3; i++) {
  result = "*";
  for (i=0; i<rows3; i++) {
    console.log(result);
    result += "*";
  }
}

// OPTION 2:
// var rows3b = 5;
// result = "";
//
// for (i=0; i<rows3b; i++) {
//   result += "*"
//   console.log(result);
// }
