function initTypewriter(selector, delay, text) {
    new Typewriter(selector, {})
        .changeDelay(delay)
        .typeString(text)
        .start();
}

// Exemple d'utilisation :
document.addEventListener('DOMContentLoaded', function () {
    initTypewriter(".typewriter", 40, "J'ai compris");
});
//Pour appliquer ceci à un élément, il faut rajouter class = "typewriter" dans l'élément

function zoomIn(element) {
    element.textContent = "Clicker pour dezoomer";
    element.classList.toggle("zoomed");
}

function changeView(idSection) {
    const activeSection = document.querySelector(".active");
    const newActiveElement = document.getElementById(idSection);
    newActiveElement.classList.add("active");

    newActiveElement.scrollIntoView({ behavior: 'smooth' });

    activeSection.classList.remove("active");
}

