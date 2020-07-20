// Assignment Codes //
var generateBtn = document.querySelector("#generate");
var capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChars = "!@#$%^&*.<>?";
var numChars = "1234567890";
var smallChars = "abcdefghijklmnopqrstuvwxyz";

//Function to generate password//
function generate() {

  //Prompts to determine length of password and kinds of characters in the password//
  var passLength = prompt("How many characters do you like your password to contain?", "Minimum 8 Max 128");
      
      //loop to meet criteria of minimum and max length//
      while (passLength < 8 || passLength > 128) {
      passLength = prompt("How many characters do you like your password to contain?", "Minimum 8 Max 128")
      };
      console.log("Length:", passLength)

  // prompts to determine list of character selection//
  var smallCharEl = confirm("Click OK to include Lowercase characters");
  var capCharsEl = confirm("Click OK to inlcude Uppercase characters");
  var numCharsEl = confirm("Click OK to include Numeric characters");
  var specCharsEl = confirm("Click OK to include Special characters");

  //set ups the list of character selection based on response above//
  characters = "";
      if (smallCharEl) { characters = characters.concat(smallChars) };
      if (capCharsEl) { characters = characters.concat(capChars) };
      if (numCharsEl) { characters = characters.concat(numChars) };
      if (specCharsEl) { characters = characters.concat(specChars) };
      console.log("Character Selections:", characters);

  //generation of the suggested password//
      // password starts with "blank" //
      password = "";

      // loop to select random letters until passLength is met 
      for (var i = 1; i <= passLength; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)))
      }
  console.log("Password generated:", password);

  // writes down the password into #password box 
  document.querySelector("#password").textContent = password;
};


// event listener to generate button
generateBtn.addEventListener("click", generate);
