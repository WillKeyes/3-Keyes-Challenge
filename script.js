// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Function to generate a password
function generatePassword() {
  // Prompt user for password criteria
  var passwordLength = prompt("How many characters would you like your password to be? Enter a number between 8 and 128.");
  
  // Convert the response to an integer and validate it
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    return "";
  }

  // Confirm the inclusion of character types
  var includeLowercase = confirm("Click OK to include lowercase characters.");
  var includeUppercase = confirm("Click OK to include uppercase characters.");
  var includeNumeric = confirm("Click OK to include numeric characters.");
  var includeSpecial = confirm("Click OK to include special characters.");

  // Validate that at least one character type has been selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  // Define the character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

  // Build the possible characters string based on criteria
  var possibleChars = "";
  if (includeLowercase) possibleChars += lowercaseChars;
  if (includeUppercase) possibleChars += uppercaseChars;
  if (includeNumeric) possibleChars += numericChars;
  if (includeSpecial) possibleChars += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomIndex];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

