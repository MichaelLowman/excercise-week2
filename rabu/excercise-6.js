var i;


console.log('\nExercise 6 soal no 1');
console.log('------------------------');

console.log("Looping pertama")
console.log('<------------------------->\n')
i=2;
while (i <= 20) {

    console.log(i + ' ' +'i love coding');
    
    i += 2;
}

console.log('\n<--------------------->\n')

i = 20;

while (i > 0){
    
    
    console.log(i + ' ' + 'I will become fullstack developer');
    i -= 2;
}


console.log('\n---------Soal no 2-----------\n');
console.log('--------Looping pertama----------');

for(i=1; i<=20; i++){

    console.log(i +' '+ 'i love javascript');
}

console.log('\n------Looping kedua--------')

for(i=20; i>0; i--){

    console.log(i +' '+ 'I will become fullstack developer');
}




//deklarasi i



//Ganjil/Genap
console.log('------- Problem 1(Ganjil/Genap) --------')
for( i = 1 ; i <=100; i++){
    
    console.log('counter sekarang : ' + i)

    if(i%2 == 0){
        
        console.log('Genap\n');
    }else{
        console.log('Ganjil\n');
    }
    

}

//Pertambahan 2
console.log('---------problem 2---------');
console.log('---------kelipatan 3-------\n');
for(i=1; i<=100; i+=2 ){

    console.log('counter sekarang : ' + i);

    if(i%3 == 0){

        console.log(i +' ' + 'kelipatan 3');
    }else{

        console.log('""');
    }

}
//Pertambahan 5

console.log('\n---------kelipatan 6----------');
for(i=1; i<=100; i+=5 ){

    console.log('counter sekarang : ' + i);

    if(i%6 == 0){

        console.log(i +' ' + 'kelipatan 6');
    }else{

        console.log('""');
    }

}

//Pertambahan 9

console.log('\n---------kelipatan10 ----------');
for(i=1; i<=100; i+=9 ){

    console.log('counter sekarang : ' + i);

    if(i%10 == 0){

        console.log(i +' ' + 'kelipatan 10');
    }else{

        console.log('""');
    }

}