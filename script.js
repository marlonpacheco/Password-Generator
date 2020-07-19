// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = prompt("How many characters do you like your password to contain?","Minimum 8 Max 128");
var specCharEl = confirm("Click OK to include Special characters");
var numCharEl = confirm("Click OK to include Numberic characters");
var smallCharEl = confirm("Click OK to include Lowercase characters");

var capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var specChars = "!@#$%^&*.<>?:;"
var numChars = "1234567890"
var smallChars = "abcdefghijklmnopqrstuvwxyz"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
