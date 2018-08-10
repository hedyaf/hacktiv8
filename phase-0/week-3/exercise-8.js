function pasanganTerbesar(num) {
  var hasil = [];
  for (var i=0; i<String(num).length-1; i++) {
    hasil.push(Number(String(num).slice(i, i+2)));
  }
  return Math.max(...hasil);

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


/*
Algorithm:
1. buat array terdiri dari number(i, i+1)
  2. ubah num menjadi type data string
  3. buat var hasil (array kosong)
  4. dengan menggunakan looping, slice string num (i, i+1)
  5. ubah dari string kembali ke number
  6. push hasil looping ke 'hasil'
2. kluarkan hasil dengan Math.max terhadap array
*/
