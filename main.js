var myButton = document.getElementById("mi_boton");
var myNumber = document.getElementById("mi_numero");
var count = 0;

myButton.onclick = function() {
    count++;
    myNumber.innerHTML = count;
}