new Typewriter(".typewriter", {})
    .changeDelay(40)
    .typeString("J'ai compris") //dans ce typeString, il faut écrire le texte (donc en utilisant ce que fait katia)
    .start();
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

