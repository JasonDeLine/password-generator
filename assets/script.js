// Password generator will randomly create a new user password between 8-128 characters based on user selected criteria

// Assignment Code + event listener to generate prompt when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);

// arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [];
var lowercase [];
var uppercase [];

// Variable declarations

// Prompt for password length

// If password length falls outside parameters, loop back to length prompt



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
