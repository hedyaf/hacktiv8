function dataHandling2(input) {
  // splice
  input.splice(1,5, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(input);
  // split
  var hasilSplit = input[3].split("/");
  var bulan = input[3].split("/")[1];
  switch (bulan) {
    case '01': { bulan = "Januari"; break; }
    case '02': { bulan = "Februari"; break; }
    case '03': { bulan = "Maret"; break; }
    case '04': { bulan = "April"; break; }
    case '05': { bulan = "Mei"; break; }
    case '06': { bulan = "Juni"; break; }
    case '07': { bulan = "Juli"; break; }
    case '08': { bulan = "Agustus"; break; }
    case '09': { bulan = "September"; break; }
    case '10': { bulan = "Oktober"; break; }
    case '11': { bulan = "November"; break; }
    case '12': { bulan = "Desember"; break; }
    default: { "bulan salah"; }
  } console.log(bulan);
  // sort ?? gimana??
  console.log(hasilSplit.sort(function(value1, value2) { return value1 < value2 }));
  // join, tp hasilnya terlanjur ke sorted.. gmn donk?
  console.log(hasilSplit.join("-"));
}



var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);
