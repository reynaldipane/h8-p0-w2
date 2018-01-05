//Quiz Trivia

//Pseudocode untuk function kalkulasiScore

TERIMA array "jawabanSoal"
TERIMA array "jawabanUser"

SIMPAN counter = 1
SIMPAN i = 0

    ULANGI i sampai panjang array "jawabanSoal"
        IF jawabanSoal ke-i = jawabanUser ke-i
            counter = counter + 1
    
        HITUNG skorAkhir   = counter / panjang array "jawabanSoal" * 100
        SIMPAN skorAkhr

KEMBALIKAN skorAkhir

//Pseudocode untuk main program

SIMPAN soal pada array "soal"
SIMPAN jawaban soal pada array "jawabanSoal"

SIMPAN i = 0
SIMPAN "jawabanUser" = array

ULANGI i sampai panjang array "soal"
    TAMPILKAN isi array "soal" ke - i
    BACA dan SIMPAN jawaban dari user di variabel "jawaban"
    SIMPAN "jawaban" ke dalam array "jawabanUser"

PANGGIL function kalkulasiScore dengan parameter jawabanSoal dan jawabanUser
SIMPAN balikan dari function kalkulasiScore pada "score"

IF "score" = 100
    TAMPILKAN "GGWP! Perfect! Score kamu : " , "score"
ELSE IF "score" > 50
    TAMPILKAN "Kamu lumayan pintar, skor kamu : ", "score"
ELSE IF "score" < 50
    TAMPILKAN "Jangan kebanyakan main game deh, score kamu cuma : ", "score"

