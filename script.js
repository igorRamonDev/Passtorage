function generatePassword(length, charset, word) {
    let password = "";

    if (word) {
        password += word;
        length -= word.length; // Reduz o comprimento restante para a senha
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("generatedPassword").textContent = password;
}

function defaultPassword() {
    const length = parseInt(document.getElementById("length").value) || 12;
    const word = document.getElementById("word").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeSpecial = document.getElementById("special").checked;
    const includeNumbers = document.getElementById("numbers").checked;

    if (includeUppercase || includeSpecial || includeNumbers || word) {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
        const numberChars = "0123456789";

        let charset = lowercaseChars;
        if (includeUppercase) charset += uppercaseChars;
        if (includeSpecial) charset += specialChars;
        if (includeNumbers) charset += numberChars;

        generatePassword(length, charset, word);
    } else {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        generatePassword(length, lowercaseChars, word);
    }
}
