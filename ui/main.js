document.getElementById("signup-form").style.display = "none";
document.getElementById("login-form").style.display = "none";
document.getElementById('reset-pass').style.display = 'none';


function signup() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById('reset-pass').style.display = 'none';

}

function login() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById('reset-pass').style.display = 'none';


}

function reset() {
    document.getElementById('reset-pass').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';

}

document.getElementById("displaymails").style.display = 'none';

function displayMails() {
    document.getElementById("displaymails").style.display = "block";
}



function checkPass() {
    let pass1 = document.getElementById('userpass').value
    let pass2 = document.getElementById("confirm").value;
    if (pass1 != pass2) {
        alert('Password is Not Correct');
    }
}

