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


console.log(criteria.length);
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

characters.lowercase()
characters.uppercase()
characters.numeric()
characters.specialCharacters()



