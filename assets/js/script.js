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

var criteria = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false   
};

//select a random character functions for each type of character

var characters = {
  lowercase: function () {
    var character = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)
    return character
    // console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1));
  },
  uppercase: function () {
    var character = (Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)).toUpperCase()
    return character
    // console.log((Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)).toUpperCase());
  },
  numeric: function () {
    var character = Math.floor(Math.random() * 9)
    return character
    // console.log(Math.floor(Math.random() * 9));
  },
  specialCharacters: function () {
    var specialCharactersList = "!#$%&()*+,-./:;<=>?@[]^_{|}~".split("")
    var character = specialCharactersList[Math.floor(Math.random() * 28)]
    return character
    // console.log(specialCharactersList[Math.floor(Math.random() * 28)]);
  }
};

// characters.lowercase()
// characters.uppercase()
// characters.numeric()
// characters.specialCharacters()

function generatePassword() {
  //on click, begin with confirms on whether they would like certain criteria

  //PASSWORD LENGTH
  criteria.length = parseInt(prompt("Please specify a password length (Min: 8, Max: 128). If this not specified, the default length will be 8 characters.","8"))
  //if they do not enter any values, default the password length to 8.
  if (criteria.length === "") {
    criteria.length = 8;
  }
  //check is the entered length is a non numeric value 
  if (isNaN(parseInt(criteria.length)) === true) {
    criteria.length = prompt("Please specify a numeric value between 8 and 128 for the password length.")
  }
  //check that it has the correct length range
  if (criteria.length < 8 || criteria.length > 128) {
    criteria.length = prompt("The length specified is outside the range allowed. Please choose a password length between 8 and 128 characters:")
  }
  // console.log(criteria.length)

  //CHARACTERS//
  alert("The following prompts will be used to determine the different character types included in your new password. At least one character type must be selected.")

  //if every character type in the criteria object is still set to false then alert that they need to select one and loop back through. 
  //Once there is at least 1 character type = true, the loop will end

  for (var i = 0; i === 0;) {
    criteria.lowercase = confirm("Would you like to include lowercase alphabetic characters?")
    console.log(criteria.lowercase)
    criteria.uppercase = confirm("Would you like to include uppercase alphabetic characters?")
    console.log(criteria.uppercase)
    criteria.numeric = confirm("Would you like to include numerical characters?")
    console.log(criteria.numeric)
    criteria.specialCharacters = confirm("Would you like to include special characters?")
    console.log(criteria.specialCharacters)
    if (criteria.lowercase == true || criteria.uppercase == true || criteria.numeric == true || criteria.specialCharacters == true) {
      i=1;
    } else {
      alert("At least one character type must be selected. Please click 'OK' to select one of the following character types.")
    }
  }



  var charBank = "";

  // if the counter is less than the length of the password. 
  for (var i = 0; i < criteria.length;) {
    if (criteria.lowercase == true) {
      charBank = charBank + characters.lowercase()
      i++;
      // console.log(charBank)
      // console.log(i);
    }
    if (criteria.uppercase == true && i < criteria.length) {
      charBank = charBank + characters.uppercase()
      i++;
      // console.log(charBank)
      // console.log(i);
    }
    if (criteria.numeric == true && i < criteria.length) {
      charBank = charBank + characters.numeric()
      i++;
      // console.log(charBank)
      // console.log(i);
    }
    if (criteria.specialCharacters == true && i < criteria.length) {
      charBank = charBank + characters.specialCharacters()
      i++;
      // console.log(charBank)
      // console.log(i);
    }
  }

  
  console.log(charBank)

  splitPass = charBank.split("")
  //shuffle the character bank so that it is not always in the order of the for loop above. 
  for (var i = splitPass.length -  1; i > 0; i--) {
    var random = Math.floor(Math.random() * (i + 1))
    var switchChar = splitPass[i]
    splitPass[i] = splitPass[random]
    splitPass[random] = switchChar;
  }
  // console.log(splitPass)

  //join the array back together as a string
  password = splitPass.join("");
  return password
}
