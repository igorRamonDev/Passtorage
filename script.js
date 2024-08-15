function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeSpecial = document.getElementById('special').checked;
    const includeNumbers = document.getElementById('numbers').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numberChars = '0123456789';

    let charset = lowercaseChars;
    if (includeUppercase) charset += uppercaseChars;
    if (includeSpecial) charset += specialChars;
    if (includeNumbers) charset += numberChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('generatedPassword').textContent = password;
}
