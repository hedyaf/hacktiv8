function targetTerdekat(arr) {
  // kalau tidak ada x sama sekali, then return 0
  if (arr.indexOf('x') === -1) {
    return 0;
  } else {

    // hitung jarak dari o ke kanan:
    var jarakKanan = 0;
    for (var i=arr.indexOf('o'); i<arr.indexOf('x'); i++) {
        jarakKanan += 1;
    }

    // hitung jarak dari o ke kiri:
    var jarakKiri = 0;
    for (var i=arr.indexOf('o'); i>arr.indexOf('x'); i--) {
      // supaya cuma sampe x pertama dari kiri nya o:
        if (arr[i] !== 'x') {
          jarakKiri += 1;
        } else {
          break;
        }
    }

    // conditional pemilihan jarak yang paling sedikit
    if (jarakKanan > jarakKiri) {
      return jarakKanan;
    } else if (jarakKiri > jarakKanan) {
      return jarakKiri;
    }
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
