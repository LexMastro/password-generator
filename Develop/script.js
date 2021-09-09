// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters= "";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()/";
var enter;
var length = Number;
var password = "";


function generatePassword() {
enter = length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) {
  length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
}
// Variations for question categories
var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}


var characters= ""


// if user selected uppercase, then we add all the upper case to the pool
if(uppers){
  characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
// if user selected lowercase, then we add all the upper case to the pool
if(lowers){
  characters = characters + "abcdefghijklmnopqrstuvwxyz"
}

// if user selected symbols, then we add all the symbols to the pool
if(symbols){
  characters = characters+ "!@#$%^&*()/"
}

// if user selected numbers, then we add all the numbers to the pool
if(numbers){
  characters = characters+ "1234567890"
}

// generate the password
  var password = "";
  console.log(characters)
  for (var index = 0; index < length; index++) {
  // grab a random character from the pool
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)]
  
  password = password + randomCharacter; 
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);