document.getElementById("signup-form").style.display = "none";
document.getElementById("login-form").style.display = "none";

function signup() {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

function login() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
}