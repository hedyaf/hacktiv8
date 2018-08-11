// SOAL 1:
var data = 'X0X0XXX0XXOX0X0X0X0X0X0X0'; // 25
var result = [];
var count = 0;

// looping pertama: untuk bikin
for (var i=0; i<Math.sqrt(data.length); i++) {
  // console.log(data[i]);
  result.push([]);
  // console.log(result);
  for (var j=0; j<Math.sqrt(data.length); j++) {
    result[i].push(data[count]);
    count += 1;
  }
} console.log(result);
