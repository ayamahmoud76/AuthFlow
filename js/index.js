var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var nameInput = document.getElementById("name");

var logEmailInput = document.getElementById("logEmail");
var logPasswordInput = document.getElementById("logPassword");

var butnLog = document.getElementById("log");
var butn = document.getElementById("sign");



var emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var nameRgx = /^[a-zA-Z\s]+$/;

var logSection = document.getElementById("signupLink");
var signSection = document.getElementById("loginLink");

var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

butn.addEventListener("click", function () {
    var account = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    nameInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
    console.log(accounts)
});

butnLog.addEventListener("click", function () {
    var emailIn = logEmailInput.value;
    var passwordIn = logPasswordInput.value;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === emailIn && accounts[i].password === passwordIn) {
            console.log("success");
            alert("welcom user");
            break;
        }
    }

});

// changing between login and signup
logSection.addEventListener("click", function () {
    logSection.parentElement.parentElement.parentElement.nextElementSibling.classList.replace("d-none", "d-block");
    logSection.parentElement.parentElement.parentElement.parentElement.classList.replace("d-block", "d-none")
});

signSection.addEventListener("click", function () {
    logSection.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.replace("d-block", "d-none");
    logSection.parentElement.parentElement.parentElement.parentElement.classList.replace("d-none", "d-block");
});
