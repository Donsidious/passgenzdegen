// Creates an array that contains characters for each category.
var lowerArr = ['a', 'b', 'c'];
var upperArr = ['A', 'B', 'C'];
var specialArr = ['!', '@', '#'];
var numArr = ['1', '2', '3'];

// Function to generate a random integer between min and max (inclusive).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this is the Function to generate a password.
function generatePassword() {
  var password = '';
  var input = parseInt(prompt('How many characters would you like your password to contain?'));

  // gives the user the option to type passowrd between 8 and 128 characters.
  if (input < 8 || input > 128 || isNaN(input)) {
    alert('Password length must be between 8 and 128 characters');
    return '';
  }

  var lowerCase = confirm('Click OK to confirm including lowercase characters.');
  var upperCase = confirm('Click OK to confirm including uppercase characters.');
  var specialChars = confirm('Click OK to confirm including special characters.');
  var numbers = confirm('Click OK to confirm including numerical characters.');

  var includedArr = [];

  if (lowerCase) {
    includedArr = includedArr.concat(lowerArr);
  }
  if (upperCase) {
    includedArr = includedArr.concat(upperArr);
  }
  if (specialChars) {
    includedArr = includedArr.concat(specialArr);
  }
  if (numbers) {
    includedArr = includedArr.concat(numArr);
  } //creates passowrd based on criteria 

  // Checks if at least one character category is selected.
  if (includedArr.length === 0) {
    alert('You must select at least one character category.');
    return '';
  }

  for (var i = 0; i < input; i++) {
    var randomIndex = getRandomInt(0, includedArr.length - 1);
    password += includedArr[randomIndex];
  }

  return password;
} //loops through character to generate password.

// Writes password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener for the generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
