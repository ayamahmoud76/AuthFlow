var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var nameInput = document.getElementById("name");

var logEmailInput = document.getElementById("logEmail");
var logPasswordInput = document.getElementById("logPassword");

var butnLog = document.getElementById("log");
var butn = document.getElementById("sign");


var logSection = document.getElementById("signupLink");
var signSection = document.getElementById("loginLink");

var logoutButon = document.getElementById("logOut");

var accounts = JSON.parse(localStorage.getItem("accounts")) || [];


var spanUser = document.getElementById("user");
var userName = localStorage.getItem("currentUserName");
if (userName !== null) {
    spanUser.innerHTML = userName;
}

// end variables 
butn.addEventListener("click", function () {
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

   
    var nameRgx = /^[a-z0-9_-]{3,15}$/;

    var emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    var passwordRgx = /^.{6,}$/;

  
    if (!name || !email || !password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields"
        });
        return;
    }

    if (!nameRgx.test(name)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Name must be 3-15 characters and contain only letters, numbers "
        });
        return;
    }


    if (!emailRgx.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid email address"
        });
        return;
    }
if (localStorage.getItem("name") !== null) {
    spanUser.innerHTML = localStorage.getItem("name");
}

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email already exists"
            });
            return;
        }
    }

    if (!passwordRgx.test(password)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password must be at least 6 characters"
        });
        return;
    }

    var account = {
        name: name,
        email: email,
        password: password
    };
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    Swal.fire({
        title: "Account registration successful",
        icon: "success",
        draggable: true
    });

    localStorage.setItem("name" , name);

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";

    spanUser.innerHTML = localStorage.getItem("name");

});


// login
butnLog.addEventListener("click", function () {
    var emailIn = logEmailInput.value;
    var passwordIn = logPasswordInput.value;

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === emailIn && accounts[i].password === passwordIn) {
            window.location.href = "home.html";
            localStorage.setItem("currentUserName", accounts[i].name);
            break;
        }
        if (accounts[i].email !== emailIn || accounts[i].password !== passwordIn) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "invalid email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

        if (!emailIn || !passwordIn) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields",
            });
            return;
        }
    }
    
    
});


// switch between login and signup 

logSection.addEventListener("click", function () {
    logSection.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.replace("d-none", "d-block");
    logSection.parentElement.parentElement.parentElement.parentElement.classList.replace("d-block", "d-none")
});


signSection.addEventListener("click", function () {
    logSection.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.replace("d-block", "d-none");
    logSection.parentElement.parentElement.parentElement.parentElement.classList.replace("d-none", "d-block");
});




function logOut() {
    window.location.href = "index.html";
    console.log("hello");
}


