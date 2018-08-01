function xo(str) {
  var o = 0;
  var x = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      o += 1;
    } else {
      x += 1;
    }
  } return o === x;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

// Algorithm:
  // Hitung jumlah x dalam str
  // Hitung jumlah o dalam str
  // return jumlah x = o
