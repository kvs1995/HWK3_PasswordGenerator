// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Generate Password Function
  //

var test = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false   
};

console.log(test.length)

test.length = 9;
console.log(test.length)