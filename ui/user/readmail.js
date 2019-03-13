function open1() {
  window.location.href = "readmail.html";
}


document.getElementById('readmail').style.display = "none";
function displayEmail() {
    document.getElementById("readmail").style.display = "block";
}

function del() {
    alert('Are you sure you want to delete this mail')
}