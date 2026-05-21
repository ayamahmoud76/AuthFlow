var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var logEmailInput = document.getElementById("logEmail");
var logPasswordInput = document.getElementById("logPassword");

var butnLog = document.getElementById("log");
var butn = document.getElementById("sign");

var logSection = document.getElementById("signupLink");
var signSection = document.getElementById("loginLink");

var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

var nameRgx = /^[a-z0-9_-]{3,15}$/;
var emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRgx = /^.{6,}$/;

// ==================== Signup ====================
butn.addEventListener("click", function () {

    var isValid = validateForm(nameRgx, nameInput) &&
                  validateForm(emailRgx, emailInput) &&
                  validateForm(passwordRgx, passwordInput);

    if (isValid === true) {
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].email === emailInput.value) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email already exists"
                });
                return;
            }
        }

        var account = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        accounts.push(account);
        localStorage.setItem("accounts", JSON.stringify(accounts)); 
        
        Swal.fire({
            title: "Account registration successful",
            icon: "success",
            draggable: true
        });

        console.log(accounts);
    } else {
        alert('invalid data');
    }

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
});

// ==================== Validation ====================
function validateForm(regex, input) {
    if (regex.test(input.value)) {
        input.nextElementSibling.classList.add("invisible");
        input.nextElementSibling.classList.remove("visible");
        return true;
    } else {
        input.nextElementSibling.classList.remove("invisible");
        input.nextElementSibling.classList.add("visible");
        return false;
    }
}

// ==================== Login ====================
butnLog.addEventListener("click", function () {
    var correct = false;
    var accounts = JSON.parse(localStorage.getItem("accounts"));

    if (logEmailInput.value === '' || logPasswordInput.value === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields",
        });
        return;
    }

    if (!accounts) {
        Swal.fire({ icon: "error", title: "Oops...", text: "No accounts found" });
        return;
    }

    for (let i = 0; i < accounts.length; i++) {
        if (logEmailInput.value === accounts[i].email &&
            logPasswordInput.value === accounts[i].password) { // ✅ accounts[i]
            correct = true;
            localStorage.setItem("currentUserName", accounts[i].name); // ✅ accounts[i]
            window.location.href = "home.html";
        }
    }

    if (correct === false) {
        Swal.fire({ icon: "error", title: "Oops...", text: "Invalid email or password" });
    }
});

// ==================== Switch Sections ====================
logSection.addEventListener("click", function () {
    document.getElementById("login").classList.replace("d-block", "d-none");
    document.getElementById("signup").classList.replace("d-none", "d-block");
});

signSection.addEventListener("click", function () {
    document.getElementById("signup").classList.replace("d-block", "d-none");
    document.getElementById("login").classList.replace("d-none", "d-block");
});
