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


//Generate Password Function Parts
  //(1) STORE criteria in an object all together

var criteria = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false   
};


// console.log(criteria.length);
//confirm you can change the object value
  // criteria.length = 9;
  // console.log(criteria.length) 


//CREATE array that the generator will choose from for alphabet, numeric and special characters
var specialCharactersList = "!#$%&()*+,-./:;<=>?@[]^_{|}~".split("")
var characters = {
  lowercase: function () {
    console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1));
  },
  uppercase: function () {
    console.log((Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)).toUpperCase());
  },
  numeric: function () {
    console.log(Math.floor(Math.random() * 9));
  },
  specialCharacters: function () {

    console.log(specialCharactersList[Math.floor(Math.random() * 28)]);
  }
};

// characters.lowercase()
// characters.uppercase()
// characters.numeric()
// characters.specialCharacters()

var password = "";
console.log(password)


function generatePassword() {
  //on click, begin with confirms on whether they would like certain criteria

  //PASSWORD LENGTH/////////////////////////////////////////////////////////////////////////
  criteria.length = prompt("Please specify a password length (Min: 8, Max: 128). If this not specified, the default length will be 8 characters.")
  //if they do not enter any values, default the password length to 8.
  if (criteria.length === "") {
    criteria.length = 8;
  }
  if (typeof criteria.length == "string") {
    criteria.length = prompt("Please specify a numeric value between 8 and 128 for the password length.")
  }
  if (criteria.length < 8 || criteria.length > 128) {
    criteria.length = prompt("The length specified is outside the range allowed. Please choose a password length between 8 and 128 characters:")
  }
  console.log(criteria.length)

  //CHARACTERS/////////////////////////////////////////////////////////////////////////
  alert("The following prompts will be used to determine the different character types included in your new password. At least one character type must be selected.")
  criteria.lowercase = confirm("Would you like to include lowercase alphabetic characters?")
  console.log(criteria.lowercase)

  criteria.uppercase = confirm("Would you like to include uppercase alphabetic characters?")
  console.log(criteria.uppercase)

  criteria.numeric = confirm("Would you like to include numerical characters?")
  console.log(criteria.numeric)

  criteria.specialCharacters = confirm("Would you like to include special characters?")
  console.log(criteria.specialCharacters)




}
