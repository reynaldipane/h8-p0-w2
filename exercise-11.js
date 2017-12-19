var nama    = 'Reynaldi';
var peran   = 'Ksatria';

var tahunLahir      = 1996
var umurSekarang    = 2017-tahunLahir;

var playerHealth    = tahunLahir * Math.random();
var monsterHealth   = tahunLahir * Math.random();
var kodeMonster     = Math.floor(Math.pow(100, Math.random()));

if (nama == '') {
    peran   = 'Kacung';
} else {
    if (peran == '') {
        console.log("Hai ", nama, ", Pilih peranmu untuk memulai game!");
    } else if (peran == 'Ksatria') {
        console.log("Selamat datang di Dunia Proxytia, ",nama , "\n");
        console.log("Halo Ksatria ", nama, ", kamu dapat menyerang dengan senjatamu !");
    } else if (peran == 'Tabib') {
        console.log("Selamat datang di Dunia Proxytia, ",nama , "\n");
        console.log("Halo Tabib ", nama, ", kamu akan membantu temanmu yang terluka !");
    } else if (peran == 'Penyihir') {
        console.log("Selamat datang di Dunia Proxytia, ",nama , "\n");
        console.log("Halo Penyihir ", nama, ", ciptakan keajaiban yang membantu kemenangan !");
    }
}

for(var i=1; i<=tahunLahir;i++) {
    if(i % umurSekarang == 0) {
        console.log(peran + ' ' + nama + ' menyerang monster!');
        monsterHealth   = monsterHealth - umurSekarang;
    } else if (i % kodeMonster == 0) {
        console.log('monster menyerang ' + peran + ' ' + nama + '!');
        playerHealth    = playerHealth - kodeMonster;
    } else if ( (i % umurSekarang == 0) && (i % kodeMonster ==0)) {
        console.log('Health keduanya bertambah');
        playerHealth    = playerHealth + kodeMonster;
        monsterHealth   = monsterHealth + umurSekarang;
    }
}

if (playerHealth > monsterHealth) {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
} else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
}


