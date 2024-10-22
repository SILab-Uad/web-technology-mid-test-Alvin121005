// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    // TODO: Create a variable for the character set based on selected options
    let characterPool = "";
    if (options.includeUppercase) characterPool += uppercase;
    if (options.includeLowercase) characterPool += lowercase;
    if (options.includeNumbers) characterPool += numbers;
    if (options.includeSpecialChars) characterPool += specialChars;
  
    // If no character types are selected, throw an error
    if (characterPool === "") {
      throw new Error("At least one character type must be selected.");
    }
    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characterPool.charAt(
        Math.floor(Math.random() * characterPool.length)
      );
    }
  
    return password;
  };
  
  // TODO: Add event listener to the button to call generatePassword and display the output
  function handleGeneratePassword() {
    const length = parseInt(document.getElementById("length").value);
    const options = {
      includeUppercase: document.getElementById("includeUppercase").checked,
      includeLowercase: document.getElementById("includeLowercase").checked,
      includeNumbers: document.getElementById("includeNumbers").checked,
      includeSpecialChars: document.getElementById("includeSpecialChars").checked,
    };
  
    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").textContent = password;
  }
  // BONUS: Implement the copy to clipboard functionality
  function copyToClipboard() {
    const password = document.getElementById("passwordOutput").textContent;
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
      });
    } else {
      alert("No password to copy!");
    }
  }
  module.exports = {
    generatePassword,
  };