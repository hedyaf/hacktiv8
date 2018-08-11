function max(array) {
  var result = []; // bisa pake null
  for (var i=0; i<array.length; i++) {
    if (array[i] > result) {
      result = array[i];
    }
  } return result;
}

console.log(max([5,3,5,7,1,1,2]));
