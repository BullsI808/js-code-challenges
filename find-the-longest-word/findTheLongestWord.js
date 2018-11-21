module.exports = function findTheLongestWord(sen) {
  // write your code in here

//   var word= '';
//   for (var i = 0; i < sen.length; i++){
//     if(sen[i].length > word){
//       word = sen[i];
//     } 
//   }
//   return word;

//variables to hold the longest words and their lengths
let longestLength = 0;
let longestWord = '';

//loops through the array
sen.map(word =>{
  // if the length of word is greater than the longestLength variable run the code below
  if (word.length > longestLength){
    //assigns a value to the longestLength variable
    longestLength = word.length;
    //assings a string to the longest word variable
    longestWord = word;
  }
});
//returns the longest words to see if they pass the test
return longestWord;
 }
