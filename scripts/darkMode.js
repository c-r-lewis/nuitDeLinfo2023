const darkModeSwitch = document.getElementById("darkModeSwitch");
const navbar = document.querySelector(".navbar");
const body = document.body;

darkModeSwitch.addEventListener('change', () => {
    const theme = darkModeSwitch.checked ? 'dark' : 'light';
    navbar.classList.toggle('bg-dark', darkModeSwitch.checked);
    navbar.classList.toggle('bg-light', !darkModeSwitch.checked);
    body.classList.toggle('bg-dark', darkModeSwitch.checked);
    body.classList.toggle('bg-light', !darkModeSwitch.checked);
    document.querySelector('.navbar').setAttribute('data-bs-theme', theme);
})