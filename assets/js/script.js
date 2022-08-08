const DARK_MODE_CLASS = "dark-mode";
const BUTTON = document.getElementById('mode-selector');
const H1 = document.getElementById("title");
// Selecting our body.
const BODY = document.getElementsByTagName("body")[0];
const FOOTER = document.getElementsByTagName("footer")[0];

// Calls "active dark-mode function".
function changeMode() {
    changeClasses();
    changeText();
}

// Active dark-mode.
function changeClasses() {
    BUTTON.classList.toggle(DARK_MODE_CLASS);
    H1.classList.toggle(DARK_MODE_CLASS);
    BODY.classList.toggle(DARK_MODE_CLASS);
    FOOTER.classList.toggle(DARK_MODE_CLASS);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if (BODY.classList.contains(DARK_MODE_CLASS)) {
        BUTTON.innerHTML = lightMode;
        H1.innerHTML = darkMode + " ON";
        return;
    }

    BUTTON.innerHTML = darkMode;
    H1.innerHTML = lightMode + " ON";
}

// Adding click event.
BUTTON.addEventListener("click", changeMode);