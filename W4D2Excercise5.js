function ubahHuruf(kata) {
  
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
                 

  var hasilKata = '';

  for(var x = 0; x < kata.length; x++){

      for(var z = 0; z < alphabet.length; z++){

          if(kata[x] === alphabet[z]){
              hasilKata += alphabet[z+1];
          }

      }

  }

  return hasilKata;


}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu