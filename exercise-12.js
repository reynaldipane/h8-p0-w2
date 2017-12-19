function balikString(kata) {
    var balikKata = '';
    for(var i=kata.length-1;i>=0;i--) {
        balikKata = balikKata + kata[i];
    }
    
    return balikKata;
}

var kata = 'Hello world!';

var outputKata = balikString(kata);
console.log(outputKata);
