function angkaPalindrome(num) {
  if (num < 10) {
    num += 1;
    return num;
  } else {
      while (num > 0) { // or something else. check!
        num += 1;
        var numString = String(num);
        var numBalik = "";
        for (var i=numString.length-1; i>=0; i--) {
          numBalik += numString[i];
        }
        if (numString === numBalik) {
          return num;
          break;
        }
        }
     }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


/*
Algorithm:
if less than 10 -> add 1
else
  looping 1: tambah num dengan 1 terus. tidak ada batas akhir.
    ubah num menjadi string (var 'numString')
    looping 2: buat num terbalik (set 'numBalik' = "")
    if numString === numBalik
      return num, then break.
*/
















// time: 45 mins
