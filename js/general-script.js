// RESPONSIVE MENU
function openMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-resp") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar-resp";
    }
}
  
var dropdown = document.getElementById("dropdown-btn");
dropdown.addEventListener("click", function() {
    this.classList.toggle("active");
    var x = this.nextElementSibling;
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
});