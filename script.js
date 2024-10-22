// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charSet = "";
    
    // TODO: Generate the password based on the selected criteria
    if(options.includeUppercase) charSet += uppercase;
    if(options.includeLowercase) charSet += lowercase;
    if(options.includeNumber) charSet += numbers;
    if(options.includeSpecialChars) charSet += specialChars;

    if(charSet === "") {
        alert("Please select at least one option for the password.");
        return;
    }

    let password = "";
    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length); // Perbaikan: Math.rantom() menjadi Math.random()
        password += charSet[randomIndex];
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("passwordLength").value);
    const options = {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumber: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChars").checked
    };

    const generatedPassword = generatePassword(length, options);
    document.getElementById("passwordOutput").innerText = generatedPassword;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById("copyBtn").addEventListener("click", () => {
    const passwordOutput = document.getElementById("passwordOutput").innerText;
    navigator.clipboard.writeText(passwordOutput).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});