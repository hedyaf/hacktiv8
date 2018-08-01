function konversiMenit(menit) {
  var jamAkhir = Math.floor(menit / 60);
  var menitAkhir = String(menit%60);
  if (menitAkhir.length === 2) {
    // case1: length menitAkhir = 2
    return jamAkhir + ":" + menitAkhir;
    // case2: length menitAkhir = 1
} else {
    return jamAkhir + ":0" + menitAkhir;
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Algorithm:
  // hitung jam -> menit dibagi 60
  // hitung menit -> sisa pembagian jam
  // make conditional for menitAkhir.length nya 1 angka & 2 angka
