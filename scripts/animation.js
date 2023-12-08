
function zoomIn(element) {
    if (element.classList.contains("zoomed")) {
        element.classList.remove("zoomed");
        element.src = "../ressources/images/board.png";
    }
    else {
        element.src = "../ressources/images/board2.png";
        element.classList.add("zoomed");
    }
}

function changeView(idSection) {
    const activeSection = document.querySelector(".active");
    const newActiveElement = document.getElementById(idSection);
    newActiveElement.classList.add("active");

    newActiveElement.scrollIntoView({ behavior: 'smooth' });

    activeSection.classList.remove("active");
}

