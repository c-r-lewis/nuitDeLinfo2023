
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

