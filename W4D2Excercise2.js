function fpb(angka1, angka2) {

  var fpb = 0;

  for( var x = 1; x < (angka1+angka2); x++){
    if(angka1 % x === 0 && angka2 % x === 0){
      fpb = x;
    }

  }

  return fpb;

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1