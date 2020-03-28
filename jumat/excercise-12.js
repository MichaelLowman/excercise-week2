function konversiMenit(menit) {
    // you can only write your code here!
    var jam ;
    var menit2;
    
    jam = Math.floor(menit / 60);
    menit2 = Math.floor(menit%60);
    
    if(menit2<10){
    return jam + ':0' + menit2;
    } else {
        return jam + ':' + menit2;
    }
  }



  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00