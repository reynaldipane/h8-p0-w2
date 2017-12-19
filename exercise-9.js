//TUGAS 1
var nama = "Reynaldi";
var angka_pembilang = 3;
var angka_penyebut  = 4;
var hasil_bagi  = angka_pembilang / angka_penyebut;
console.log("Hallo " + nama + ", " + angka_pembilang + " dibagi " + angka_penyebut + " adalah sama dengan " + hasil_bagi);
//END OF TUGAS 1

//TUGAS 2
var alas    = 12;
var tinggi  = 6;
var luas_segitiga   = alas * tinggi / 2;
console.log("Luas segitiga : " + luas_segitiga);
//END OF TUGAS 2

//TUGAS 3
var tahun   = 2004;

if (tahun % 4 == 0) {
    if (tahun % 100 != 0) {
        console.log(tahun + " adalah tahun kabisat");
    } else {
        if (tahun % 400 == 0) {
            console.log(tahun + " adalah tahun kabisat");
        } else {
            console.log(tahun + " adalah bukan tahun kabisat");
        }
    }
} else {
    console.log(tahun + " adalah bukan tahun kabisat");    
}
//END OF TUGAS 3