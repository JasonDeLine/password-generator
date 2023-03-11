// Password generator will randomly create a new user password between 8-128 characters based on user selected criteria

// Assignment Code + event listener to generate prompt when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);

// arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// Variable declarations
var askLength = "";
var confirmSpecial;
var confirmLower;
var confirmUpper;

// Prompt for password length
function generatePassword() {
  var askLength = (prompt("How many characters do you want in your password?"));
// If password length falls outside parameters, loop back to length prompt
  while(askLength <= 7 || askLength >= 129)
    alert("Your password must be between 8 and 128 characters. Please try again.")
    var askLength = (prompt("How many characters do you want in your password?"))
  
}
  // Length confirmation message
    alert('Your password will have ${askLength} characters');





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
