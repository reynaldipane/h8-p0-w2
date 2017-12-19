//TUGAS 1
var total = 0;

for(var index=1; index <= 100; index++) {
    if (index % 2 != 0) {
        total = total + index;
    } else if (index % 2 == 0) {
        total = total - index;
    }
}

console.log("Total : ", total);
//END OF TUGAS 1

//TUGAS 2 
var pagar = "";

for(var index1=1; index1 <= 10; index1++) {
    for(var index2=0; index2 <= 10; index2++) {
        pagar = pagar + "#";
    }
    console.log(pagar);
    pagar = "";
}
//END OF TUGAS2

//TUGAS 3
var bintang = "";

for(var index1=1;index1<=10;index1++) {
    for(var index2=0;index2<=index1;index2++) {
        bintang = bintang + "*";
    }
    console.log(bintang);
    bintang = "";
}
//END OF TUGAS 3