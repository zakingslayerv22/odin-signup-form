//define vars


function passwordConfirm() {
    const password1 = document.querySelector("#password-1");
    const password2 = document.querySelector("#confirm-password");
    const passwordMatchInfo = document.querySelector("#pass-match-info");


    if ((password1.value === "") || (password2.value === "" )) {
        passwordMatchInfo.text = "";
    } else if (password1.value !== password2.value) {
        password1.setCustomValidity("Please check your password.");
        password2.setCustomValidity("Please check your password.");
        passwordMatchInfo.classList = "red";
        passwordMatchInfo.textContent = "*Passwords don't match!";
    } else {
        password1.setCustomValidity("");
        password2.setCustomValidity("");
        passwordMatchInfo.classList = "green";
        passwordMatchInfo.textContent = "Hmmm...looks nice."
    } 
}

passwordConfirm();

console.log(password1.textContent);