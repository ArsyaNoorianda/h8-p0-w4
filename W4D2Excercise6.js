function hitungHuruf(kata) {
  var arr = kata.split(' ');
    
  for (var x in arr) {
  for (var z = 0; z < arr[x].length; z++) {
    if (arr[x].lastIndexOf(arr[x][z]) !== arr[x].indexOf(arr[x][z])) {
      return arr[x];
      }
    }
  }
}

  

console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
