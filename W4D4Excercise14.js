function sorting(arrNumber) {
    // code di sini
    var arrSorted = arrNumber.sort(function(val1, val2) { return val1 < val2 });
    
    return arrSorted;
  }
  
  
function getTotal(arrNumber) {
    // code di sini
    var Largest = arrNumber[0];
    var Appear = 0;
    
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[0] === arrNumber[i]) {
        Appear++;
      }
    }
    
    var result = 'angka paling besar adalah ' + Largest + ' dan jumlah kemunculan sebanyak ' + Appear + ' kali';
    
    if (!arrNumber.length ) {
      return "''";
    } else {
      return result;
    }
  }
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''