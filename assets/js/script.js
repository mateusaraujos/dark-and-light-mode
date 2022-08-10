// Constantes.
const DARK_MODE_CLASS = "dark-mode";
const BUTTON = document.getElementById('mode-selector');
const H1 = document.getElementById("title");
// Selecionando body e footer.
const BODY = document.getElementsByTagName("body")[0];
const FOOTER = document.getElementsByTagName("footer")[0];

/**
 * Uma função que executa as funções changeClasses() e changeText(), respectivamente.
 */
function changeMode() {
    changeClasses();
    changeText();
}

/**
 * Uma função que altera a classe dos elementos das constantes BUTTON, H1, BODY e
 * FOOTER para DARK_MODE_CLASS. Alternando entre Light Mode e Dark Mode.
 */
function changeClasses() {
    BUTTON.classList.toggle(DARK_MODE_CLASS);
    H1.classList.toggle(DARK_MODE_CLASS);
    BODY.classList.toggle(DARK_MODE_CLASS);
    FOOTER.classList.toggle(DARK_MODE_CLASS);
}

/**
 * Uma função que altera os textos dos elementos das constantes BUTTON e H1,
 * respeitando uma condição.
 */
function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    // Condição: Se a classe do elemento da constante BODY contiver DARK_MODE_CLASS.
    if (BODY.classList.contains(DARK_MODE_CLASS)) {
        BUTTON.innerHTML = lightMode;
        H1.innerHTML = darkMode + " ON";
        return;
    }

    BUTTON.innerHTML = darkMode;
    H1.innerHTML = lightMode + " ON";
}

// Evento de clique que aciona a função changeMode().
BUTTON.addEventListener("click", changeMode);