
function cariMedian(arr) {
    // mengurutkan arr
    //arr.sort(function (a, b) {
    //  return a - b;
    //});
    
    // nilai tengah dari panjang arr
    var med = Math.floor(arr.length / 2);
    
    // jika panjang arr ganjil maka ambil nilai tengahnya
    if (arr.length % 2) {
      return arr[med];
    } else { // jika panjang arr genap maka jumlah kedua nilai tengah dibagi 2 
      return (arr[med-1] + arr[med]) / 2;
    }
  }
  
  
  
  


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5