function kalkulasiScore(jawabanUser, jawabanSoal) {
    counter = 0;
    for (var i=0;i<jawabanSoal.length;i++) {
      if(jawabanUser[i] == jawabanSoal[i]) {
        counter=counter+1;
      }
    }  
    
    skorAkhir   = counter / jawabanSoal.length * 100;
    return skorAkhir;
}
  
  var soal = ["Jawab Pertanyaan yang ada dengan benar atau salah : \n \n 1. Indonesia merdeka pada tanggal 17 Agustus 1945", 
  "Jawab Pertanyaan yang ada dengan benar atau salah : \n \n 2. Bordeaux adalah ibukota Prancis ", 
  "Jawab Pertanyaan yang ada dengan benar atau salah : \n \n 3. Steve Jobs adalah salah satu founder Microsoft",
  "Jawab Pertanyaan yang ada dengan benar atau salah : \n \n 4. Pascal adalah salah satu jenis bahasa pemrograman",
  "Jawab Pertanyaan yang ada dengan benar atau salah : \n \n 5. Gunung Bromo adalah gunung tertinggi di Indonesia"];
  
  var jawabanSoal = ["benar", "salah", "salah", "benar", "salah"];
  
  var jawabanUser = []
  
  for (var i=0;i < soal.length; i++) {
    var jawaban = prompt(soal[i]);
    jawabanUser.push(jawaban)  
  }
  
  score = kalkulasiScore(jawabanUser, jawabanSoal);
  
  if (score == 100) {
    console.log("GGWP! Perfect! Score kamu : ", score);
  } else if (score > 50) {
    console.log("Kamu lumayan pintar, skor kamu : ", score);
  } else if (score < 50) {
    console.log("Jangan kebanyakan main game deh, score kamu cuma : ", score);
  }