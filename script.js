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
  document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("passwordLength").value);
    const options = {
      includeUppercase: document.getElementById("includeUppercase").checked,
      includeLowercase: document.getElementById("includeLowercase").checked,
      includeNumbers: document.getElementById("includeNumbers").checked,
      includeSpecialChars: document.getElementById("includeSpecialChars").checked
    };
  
    try {
      const generatedPassword = generatePassword(length, options);
      document.getElementById("passwordOutput").innerText = generatedPassword;
    } catch (error) {
      alert(error.message);
    }
  });
  // BONUS: Implement the copy to clipboard functionality
  document.getElementById("copyBtn").addEventListener("click", () => {
    const passwordOutput = document.getElementById("passwordOutput").innerText;
    if (passwordOutput) {
      navigator.clipboard.writeText(passwordOutput).then(() => {
        alert("Password copied to clipboard!");
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    } else {
      alert("No password to copy!");
    }
  });
  
  module.exports = {
    generatePassword,
  };