function urutkanAbjad(str) {

  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var urutan = '';
      
    for (var i = 0; i < abjad.length; i++) {
      for (var j = 0; j < str.length; j++) {
        if (abjad[i] === str[j]) {
          urutan += abjad[i];
           }
        }
      }
      
       return urutan;
    }