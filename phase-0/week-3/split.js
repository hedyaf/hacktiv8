function split(string, char) {
  var result = [];
  var temp = "";
  var string = string + char; // option 1: lebih gampang
  for (var i=0; i<string.length; i++) {
    if (string[i] !== char) {
      temp += string[i];
    } else {
      result.push(temp);
      temp = "";
    }

    // option 2: lebih pusing.
    // if (i === string.length-1) {  // untuk huruf terakhir:
    //   result.push(temp);  // jadi if ini:
    // }

  } return result;
}

var kata = 'Hello-I-love-JS-';
console.log(split(kata, "-"));

// output: ['Hello', 'I', 'love', 'JS'];


/*
result = [];
temp = "";
looping pngecekan dari index 0
        if string[i] !== char
          then, temp += index tsb
        if string[i] === char
          then, push temp to result
          temp = ""  -> temp dikosongin lagi
*/
