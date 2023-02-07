var menu = document.getElementById("menu");
var btnBar = document.getElementById("premierMenu");
var btnClose = document.getElementById("deuxiemeMenu");

function Open() {
    menu.style.display = "block";
    menu.style.height = "100%"
    btnBar.style.display = "none";
    btnClose.style.display = "block";
    btnClose.style.color = "white";
}


function Close() {
    menu.style.display = "none";
    btnBar.style.display = "block";
    btnClose.style.display = "none";
}