const BUTTON = document.getElementById('mode-selector');
const H1 = document.getElementById("title");
// Selecting our body
const BODY = document.getElementsByTagName("body")[0];
const FOOTER = document.getElementsByClassName("developer");    

// Active dark mode or light mode function.
function changeMode() {
    changeClasses();
}

function changeClasses() {
    BUTTON.classList.toggle("dark-mode");
    H1.classList.toggle("dark-mode");
    BODY.classList.toggle("dark-mode");
    FOOTER.classList.toggle("dark-mode");
}

// Adding click event
BUTTON.addEventListener("click", changeMode);