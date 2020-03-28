function xo(str) {
  // you can only write your code here!
     
     var hallo = str.split('',str.length);
     var jumlahx = 0;
     var jumlaho = 0;

    for (var i=0; i<=str.length; i++){

      
        if(hallo[i] == 'x'){

          jumlahx++

        }else if(hallo[i] == 'o'){

          jumlaho++

            }
        
           
        } 

        if(jumlahx == jumlaho){

          return true

      } else {

          return false
    
      }
    
  }

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true