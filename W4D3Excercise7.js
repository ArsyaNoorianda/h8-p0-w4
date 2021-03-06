/*  Logic Challenge - Digit Perkalian Minimum
Problem

Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut,
yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

*/


function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var hasilKali = 0;
    var faktorAngka;
    var arr = [];
    var arrSlice= [];
    var digit = '';
    
    for(var x = 0; x <= angka; x ++) {
      for(var z = 0; z <= angka; z ++) {
        var tes = x + '-' + z;
        hasilKali = x*z;
        if (hasilKali === angka) {
          faktorAngka = String(x) + String(z);
          arr.push(faktorAngka);
          arrSlice = arr.slice(Math.round(arr.length/2-1),Math.round(arr.length/2));
          digit = arrSlice[0];
        }
      }
    }
    return digit.length;
  }
  



// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2