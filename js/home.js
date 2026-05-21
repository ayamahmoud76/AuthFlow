if(localStorage.getItem("currentUserName") === null){
    window.location.href = "index.html"
}
var spanUser = document.getElementById("user");
var logoutButon = document.getElementById("logOut");
var userName = localStorage.getItem("currentUserName")
spanUser.innerHTML = userName

function logOut() {
    window.location.href = "index.html";
    localStorage.removeItem("currentUserName")
}