// Assignment code here
var uppercase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
var charSet  = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordlength = prompt ("Your password must be between 8-128 characters. Please select the number of characters you'd like to use in your password.")
  if (passwordlength < 8 || passwordlength > 128) {
    alert ("Please choose a number within the parameters of 8-128")
    return ""
  }
  var chooseupper = confirm ("Would you like to use upper case letters in your password?")
  var chooselower = confirm ("Would you like to use lower case letters in your password?")
  var choosenumbers = confirm ("Would you like to use numbers in your password?")
  var choosespecial = confirm ("Would you like to use special characters in your password?")
  var randompassword = ""

  //add arrays if the user has chosen that they want to use uppercase
  
  charSet = []
  if (chooseupper === true) {
    charSet.push (uppercase)
  }

  if (chooselower === true) {
    charSet.push (lowercase)
  }

  if (choosenumbers === true) {
    charSet.push (numbers)
  }

  if (choosespecial === true) {
    charSet.push (specialChar)
  }

  if (charSet.length === 0) {
    alert ("Please choose at least one character set to create your password.")
    return ""
  }

for (let index = 0; index < passwordlength; index++) {
  const randomcharsetlength = Math.floor (Math.random() * charSet.length)
  const randomcharacterset = charSet [randomcharsetlength] 
  const randomlength = Math.floor(Math.random () * randomcharacterset.length)
  randompassword += randomcharacterset[randomlength]
}

return randompassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
