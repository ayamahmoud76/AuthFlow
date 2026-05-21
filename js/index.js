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
   var emailRgx =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
   var passwordRgx = /^.{6,}$/;

//signup


butn.addEventListener("click", function(){

var isValid = validateForm(nameRgx, nameInput) && validateForm(emailRgx, emailInput) && validateForm(passwordRgx, passwordInput)
if(isValid === true){
    var account = {
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value
    }
    
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
         Swal.fire({
         title: "Account registration successful",
         icon: "success",
        draggable: true
     });
     accounts.push(account)
    localStorage.setItem("account", JSON.stringify(accounts))
    console.log(accounts);
}else{
    alert('invalid data')
}
 nameInput.value = ""
 emailInput.value = ""
 passwordInput.value = ""
})

//validation 
function validateForm(regex, input){
    if(regex.test(input.value)){
        input.nextElementSibling.classList.add("invisible")
        input.nextElementSibling.classList.remove("visible")
        return true
        
    }else{
        input.nextElementSibling.classList.remove("invisible")
        input.nextElementSibling.classList.add("visible")
        return false
    }
}

// login

butnLog.addEventListener("click", function(){
    var correct = false
    var account = JSON.parse(localStorage.getItem("accounts"))
    if(logEmailInput.value === '' || logPasswordInput.value === ''){
            Swal.fire({
                icon: "error",
               title: "Oops...",
               text: "Please fill in all fields",
            });
           return;
       
}
    for(i = 0 ; i < accounts.length; i++)
    if(logEmailInput.value === account[i].email && logPasswordInput.value === account[i].password ){
        correct = true
        localStorage.setItem("currentUserName", account[i].name);
        window.location.href = "home.html";
        console.log(accounts);
    }
    if(correct === false){
    Swal.fire({icon: "error", title: "Oops...", text: "Invalid email or password"})
}
    
})


// switch between login and signup 

logSection.addEventListener("click", function () {
    document.getElementById("login").classList.replace("d-block", "d-none");
    document.getElementById("signup").classList.replace("d-none", "d-block");
});

signSection.addEventListener("click", function () {
    document.getElementById("signup").classList.replace("d-block", "d-none");
    document.getElementById("login").classList.replace("d-none", "d-block");
});



