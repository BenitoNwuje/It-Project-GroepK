window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function message(e){
    e.preventDefault();
    let myList = document.getElementById('loginFormActief');
    let myForm = new FormData(myList);
    let select = myForm.get('userName');
    let element = document.getElementById("welkomBericht").innerHTML = "Welkom terug " + select +" !";
    document.getElementById('topAanmelden').style.display="none"
    }
    document.getElementById("loginButton").addEventListener("click", message);