// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lengthEl = prompt("How many characters do you like your password to contain?","Minimum 8 Max 128");
  // if (lengthEl < 8 || lengthEl > 128){
  //   lengthEl
  // };

// var specCharEl = confirm("Click OK to include Special characters");
// var numCharEl = confirm("Click OK to include Numberic characters");
// var smallCharEl = confirm("Click OK to include Lowercase characters");

var capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var specChars = "!@#$%^&*.<>?:;"
var numChars = "1234567890"
var smallChars = "abcdefghijklmnopqrstuvwxyz"

// Write password to the #password input

function generate (){
    length = prompt("How many characters do you like your password to contain?","Minimum 8 Max 128");
    smallCharEl = confirm("Click OK to include Lowercase characters");
    capCharsEl = confirm("Click OK to inlcude Uppercase characters");
    numCharsEl = confirm("Click OK to include Numeric characters");
    
    values = "";
    if (smallCharEl) { values = values.concat(smallChars)};
    if (capCharsEl) { values = values.concat(capChars)};
    if (numCharsEl) { values = values.concat(numChars)};
    if (specCharsEl) { values = value.concat(specChars)};
  };

    



// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generate);
