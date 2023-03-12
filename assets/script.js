// Password generator will randomly create a new user password between 8-128 characters based on user selected criteria

// Assignment Code + event listener to generate prompt when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);

// arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable declarations
var askLength = "";
var confirmSpecial;
var confirmLower;
var confirmUpper;
var confirmNumeric;

// Prompt for password length
function generatePassword() {
  var askLength = (prompt("How many characters do you want in your password?"));

// If password length falls outside parameters, loop back to length prompt
  while(askLength <= 7 || askLength >= 129){
    alert("Your password must be between 8 and 128 characters. Please try again.")
    var askLength = (prompt("How many characters do you want in your password?"))
    }
  // Length confirmation message
    alert("Your password will have " + askLength + " characters");
  
    // Criteria selection prompts
    var confirmSpecial = confirm("Click OK if you would like special characters in your password. Otherwise click cancel.");
    var confirmNumeric = confirm("Click OK if you would like numeric characters in your password. Otherwise click cancel.")
    var confirmLower = confirm("Click OK if you would like lowercase letters in your password. Otherwise click cancel.");
    var confirmUpper = confirm("Click OK if you would like uppercase letters in your password. Otherwise click cancel.");
    // loops if answers are outside password requirements
    while(confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumeric === false) {
      alert("You must choose at least one parameter");
      var confirmSpecial = confirm("Click OK if you would like special characters in your password. Otherwise click cancel.");
      var confirmNumeric = confirm("Click OK if you would like numeric characters in your password. Otherwise click cancel.")
      var confirmLower = confirm("Click OK if you would like lowercase letters in your password. Otherwise click cancel.");
      var confirmUpper = confirm("Click OK if you would like uppercase letters in your password. Otherwise click cancel.");
  }

  // assigning action to password criteria selections
  var passwordCharacters = []
      
    if (confirmSpecial) {
      passwordCharacters = passwordCharacters.concat(specialCharacter)
    }

    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(uppercase)
    }

      console.log(passwordCharacters)

      // empty string will populate with criteria selections
      var randomPassword = ""
      
      for (var i = 0; i < askLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
