function isPalindrome(word) {
  // Algorithm:
  /*Create a boolean, "palindrome", initialized to "false".
    Use a function to reverse the word,
      by splitting characters to create array,
      reverse array,
      and rejoin characters into new string.
        IF reversed string equals word,
          Set palindrome to equal "true".
        return palindrome.*/

  let palindrome = false; //Initialize palindrome.

  function reverseWord(word){
    let str = word.split("").reverse().join(""); //optimized code to create array, reverse array, and join into the reversed string.
    return str;
  }

  reverseWord(word); //invoke reversing function.

  if(reverseWord(word) === word){
    palindrome = true;
  }
  return palindrome;
}

/* Pseudocode:
  function isPalindrome(word){
    let palindrome = false;
    function reverseWord(){
      let arr = word.split("");
      let revArr = array.reverse(arr);
      let str = revArr.join("");
      return str;
    }
    reverseWord(word);

    if(reverseString(word) === word){ //Check if word is a palindrome
      palindrome = true;
    }
    return palindrome;
  }*/

/*
  Written explanation:
  The purpose of this lab is to determine whether a 
  lower-case string (not testing upper-case or special characters)
  is a palindrome (spelled the same forward AND backwards).
  
  In order to make sure that the code will confirm that a palindrome is indeed a palindrome,
  9 tests cases are used, with 7 true, 2 false.

  for the coding of reverseWord(word):
  Many ways to implement the funcionality are possible,
  this was simply the one that was chosen, for time's sake (after being optimized).*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("a"));
  console.log("=>", isPalindrome("i"));
  console.log("=>", isPalindrome("level"));
  console.log("=>", isPalindrome("madam"));
  console.log("=>", isPalindrome("hannah"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;