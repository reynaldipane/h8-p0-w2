for(i=1;i<=100;i++) {
    if(i % 2 == 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

for(i=1;i<=100;i+=2) {
    if(i % 3 == 0) {
        console.log(i + ' KELIPATAN 3');
    } else {
        console.log('" "');
    }
}

for(i=1;i<=100;i+=5) {
    if(i % 6 == 0) {
        console.log(i + ' KELIPATAN 6');
    } else {
        console.log('" "');
    }
}

for(i=1;i<=100;i+=9) {
    if(i % 10 == 0) {
        console.log(i + ' KELIPATAN 10');
    } else {
        console.log('" "');
    }
}