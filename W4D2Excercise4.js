function cariModus(arr) {
    
    var arrModus = [], isSame = false;
      
      for (var x = 0; x < arr.length; x++) {
        for (var y = x+1; y < arr.length; y++) {
          if (arr[x] === arr[y]) {
            isSame = true;
            arrModus.push(arr[x]);
          } else {
            isSame = false;
          }
        }
      }
    
      return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
    }
    

    console.log(cariModus([10, 4, 5, 2, 4])); // 4
    console.log(cariModus([5, 10, 10, 6, 5])); // 5
    console.log(cariModus([10, 3, 1, 2, 5])); // -1
    console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
    console.log(cariModus([7, 7, 7, 7, 7])); // -1    





  
       