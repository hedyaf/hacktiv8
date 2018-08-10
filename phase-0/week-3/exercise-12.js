function tentukanDeretGeometri(arr) {
  var bagi = arr[1] / arr[0];
  result = true;
  for (var i=0; i<arr.length-1; i++) {
    if (arr[i+1] / arr[i] !== bagi) {
      result = false;
      break;
    }
  } return result;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


/*
Algorithm:
1. Set var 'bagi' sebagai patokan pembagian index 0 & 1
    arr[i+1] / arr[i]
2. looping pengecekan setiap angka
3. return false if not equal 'bagi'. break.

*/
