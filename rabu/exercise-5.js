//exercise 5 no 1

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log('<-------Soal no 1------->')
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);


// exercise 5 no 2
word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word [12] + word [13]; // do your own!
var thirdWord = word[15] + word[16] ; // do your own!
var fourthWord = word[18] + word[19]; // do your own!
var fifthWord =word[21] + word[22] + word[23] + word[24]; // do your own!

console.log('\n');
console.log('--------- Soal no 2 ---------');

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// exercise 5 no 3
exampleFirstWord = word.substring(0, 3);
secondWord = word.substring(4, 14); // do your own!
thirdWord = word.substring(15, 17); // do your own!
fourthWord = word.substring(18, 20); // do your own!
fifthWord = word.substring(21, 25); // do your own!

console.log('\n')
console.log('--------Soal no 3---------');
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//exercise 5 no 4
var firstWordLength = exampleFirstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;


console.log('\n');
console.log('<-------soal no 4-------->');
console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength) ;
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);