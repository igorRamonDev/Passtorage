function generatePassword(length, charset, word) {
    let password = "";

    if (word.length > length){
        alert("Tamanho inválido")
    } else {
        password += word;
        length -= word.length
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("generatedPassword").value = password; // Use value para campos de input
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

//alternar visibilidade
document.getElementById("toggleVisibility").addEventListener("click", function() {
    const passwordField = document.getElementById("generatedPassword");
    const button = this;
    
    if (passwordField.type === "text") {
        passwordField.type = "password";
        button.textContent = "Mostrar senha";
    } else {
        passwordField.type = "text";
        button.textContent = "Esconder senha";
    }
});

document.getElementById("clipboardCopy").addEventListener("click", execCopy);
function execCopy (){
    document.getElementById("generatedPassword").select();
    document.execCommand("copy");
}
