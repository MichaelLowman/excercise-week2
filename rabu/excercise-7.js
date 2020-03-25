
var rows1 = 5;
var rows2 = 5;
var hasil1 = " "; //membuat string kosong
var hasil2 = " "; //membuat string kosong
var hasil3 = " "; //membuat string kosong

console.log('<--soal 1-->')

for(let i=1; i<=rows1; i++){

     console.log('*');
         
}
console.log(hasil1);

console.log('\n<--soal 2-->')



for(let i=1; i<=rows1; i++){
    
    for(let j=1; j<=rows2; j++){
     
      hasil2 = hasil2.concat('*') //menggabungkan string kosong dengan *
          
    }
    
    hasil2 = hasil2.concat('\n')
}

console.log(hasil2)

console.log('<-- soal3-->')

for(let i=1; i<=rows1; i++){
    
    for(let j=1; j<=i; j++){
     
      hasil3 = hasil3.concat('*') //menggabungkan string kosong dengan *         
    }
    
    hasil3 = hasil3.concat('\n') 
}

console.log(hasil3)
