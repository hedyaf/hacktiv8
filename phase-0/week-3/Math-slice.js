// Math.slice logic:
function slice(array, start, end) {
  var result = [];
  for (var i=start; i< end; i++) {
    result.push(array[i])
  }
  return result;
}

console.log(slice([1,2,3,4,5,6],1,4));
