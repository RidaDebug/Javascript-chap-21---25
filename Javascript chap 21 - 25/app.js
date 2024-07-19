//=====q1
//Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//===================Answer
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName);

//=====q2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

//===================Answer
// var favrtMobilePhoneModel = prompt("Enter Your favourite mobile phone model");

// alert(
//   "The length of your favorite mobile phone model is: " +
//     favrtMobilePhoneModel.length
// );

//=====q3
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

var word = "Pakistani";
var indexOfN = word.indexOf("n");
console.log("The index of 'n' in the word 'Pakistani' is: " + indexOfN);

//=====q4
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word2 = "Hello World";
var lastIndex = word2.lastIndexOf("l");
console.log("The Last index of 'n' in the word 'Pakistani' is: " + lastIndex);

//=====q5
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var word3 = "Pakistani";
var thirdCharacter = word3.charAt(3);
console.log(
  "The character at index 3 in the word 'Pakistani' is: " + thirdCharacter
);

//=====q6
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name. by using string concatination mathod

//===================Answer

// var firstName = prompt("Enter your first name:");

// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName);

//=====q7
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var word4 = "Hyderabad";

var replacedWord = word4.replace("Hyder", "Islam");

console.log(
  "The word after replacing 'Hyder' with 'Islam' is: " + replacedWord
);

//=====q8
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message =
  "Ali and Sami are best friends. They play cricket and football together.";

var replacedMessage = message.replaceAll(/and/g, "&");

console.log(
  "The message after replacing 'and' with '&' is: " + replacedMessage
);

//=====q9
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var numberString = "472";

var number = parseInt(numberString);

console.log("The value of numberString is: " + numberString);

console.log("The type of numberString is: " + typeof numberString);

console.log("The value of number is: " + number);

console.log("The type of number is: " + typeof number);

//=====q10
// Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput = prompt("Enter any text:");

// var capitalizedInput = userInput.toUpperCase();

// console.log("The capitalized input is: " + capitalizedInput);

//=====q11
// Write a program that takes user input. Convert and
// show the input in title case.

var fLetter = "j";
var secLetter = "avaScript";

var titleCaseInput = fLetter.toUpperCase() + secLetter.toLowerCase();

console.log("The title case input is: " + titleCaseInput);

//=====q12
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;

var stringNum = num.toString().replace(".", "");

console.log("The string representation of the number is: " + stringNum);

//=====q13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var username = prompt("Enter a username:");
var specialSymbol = /[@.,!]/;
if (specialSymbol.test(username)) {
  alert("Username contains special symbols. Please enter a valid username.");
} else {
  console.log("Valid username: " + username);
}

//=====q14
//  You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter a item to search:");
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === searchItem.toLowerCase()) {
    found = true;
    break;
  }
}
if (found) {
  alert("Item found in the list.");
} else {
  alert("Item not found in the list.");
}

//=====q15
//  Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter a password: ");
var hasAlpha = /[a-zA-Z]/.test(password);
var hasNumber = /[0-9]/.test(password);
var isNotStartWithNumber = /^[^0-9]/.test(password);
var isLongEnough = password.length >= 6;

if (hasAlpha && hasNumber && isNotStartWithNumber && isLongEnough) {
  console.log("Valid password: " + password);
} else {
  alert("Invalid password. Please enter a valid password.");
  password = prompt("Enter a password:");
}

//=====q16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";

for (let index = 0; index < university.length; index++) {
  console.log(university[index]);
}

//=====q17
// Write a program to display the last character of a user
// input.

var userInput = prompt("Enter a word:");

var lastCharacter = userInput[userInput.length - 1];

console.log("The last character of the input string is: " + lastCharacter);

//=====q18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";

var count = (sentence.match(/the/gi) || []).length;

console.log("Number of occurrences of 'the' in the sentence: " + count);
