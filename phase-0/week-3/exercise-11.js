function tentukanDeretAritmatika(arr) {
  var selisih = arr[0] - arr[1];

  for (var i=0; i<arr.length-1; i++) {
    if (arr[i] - arr[i+1] === selisih) {
      result = true;
    } else {
      result = false;
      break;
    }
  } return result;
}



// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false



/*
algorithm:
1. set selisih index 0 & 1 sebagai patokan pengecekan
2. looping pengecekan selisih index i & i+1
  3. jika ada yg tidak sesuai, set result = false, lalu break.
*/
