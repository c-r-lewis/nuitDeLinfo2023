const darkModeSwitch = document.getElementById("darkModeSwitch");
const navbar = document.querySelector(".navbar");
const body = document.body;
const protanopiaCheckbox = document.getElementById('protanopia');
const deuteranopiaCheckbox = document.getElementById('deuteranopia');
const tritanopiaCheckbox = document.getElementById('tritanopia');

darkModeSwitch.addEventListener('change', () => {
    if (protanopiaCheckbox.checked || deuteranopiaCheckbox.checked || tritanopiaCheckbox.checked) {
        protanopiaCheckbox.disabled = true;
        deuteranopiaCheckbox.disabled = true;
        tritanopiaCheckbox.disabled = true;
        protanopiaCheckbox.checked = false;
        deuteranopiaCheckbox.checked = false;
        tritanopiaCheckbox.checked = false;
    }
    const theme = darkModeSwitch.checked ? 'dark' : 'light';
    navbar.classList.toggle('bg-dark', darkModeSwitch.checked);
    navbar.classList.toggle('bg-light', !darkModeSwitch.checked);
    body.classList.toggle('bg-dark', darkModeSwitch.checked);
    body.classList.toggle('bg-light', !darkModeSwitch.checked);
    document.querySelector('.navbar').setAttribute('data-bs-theme', theme);
    if (!darkModeSwitch.checked) {
        protanopiaCheckbox.disabled = false;
        deuteranopiaCheckbox.disabled = false;
        tritanopiaCheckbox.disabled = false;
    }
})

protanopiaCheckbox.addEventListener('change', () => {
    if (protanopiaCheckbox.checked) {
        if (darkModeSwitch.checked) {
            protanopiaCheckbox.disabled = true;
        }
        else {
            deuteranopiaCheckbox.disabled = true;
            tritanopiaCheckbox.disabled = true;
        }
        updateColors('protanopia');
    }
    else {
        deuteranopiaCheckbox.disabled = false;
        tritanopiaCheckbox.disabled = false;
        updateColors('base');
    }
});

deuteranopiaCheckbox.addEventListener('change', () => {
    if (deuteranopiaCheckbox.checked) {
        if (darkModeSwitch.checked) {
            deuteranopiaCheckbox.disabled = true;
        } else {
            protanopiaCheckbox.disabled = true;
            tritanopiaCheckbox.disabled = true;
        }
        updateColors('deuteranopia');
    }
    else {
        protanopiaCheckbox.disabled = false;
        tritanopiaCheckbox.disabled = false;
        updateColors('base');
    }
});

tritanopiaCheckbox.addEventListener('change', () => {
    if (tritanopiaCheckbox.checked) {
        if (darkModeSwitch.checked) {
            tritanopiaCheckbox.disabled = true;
        } else {
            protanopiaCheckbox.disabled = true;
            deuteranopiaCheckbox.disabled = true;
        }
        updateColors('tritanopia');
    }
    else {
        protanopiaCheckbox.disabled = false;
        deuteranopiaCheckbox.disabled = false;
        updateColors('base');
    }
});

function updateColors(type) {
    const colors = getColorScheme(type);
    document.querySelector('body').classList.remove("bg-light");
    document.body.style.backgroundColor = colors.bgColor;
    document.body.style.color = colors.textColor;
}

function getColorScheme(type) {
    switch (type) {
        case 'protanopia':
            return {
                bgColor: '#FFFFF0',
                textColor: '#333333'
            };
        case 'deuteranopia':
            return {
                bgColor: '#F0FFF0',
                textColor: '#333333'
            };
        case 'tritanopia':
            return {
                bgColor: '#F0F8FF',
                textColor: '#333333'
            };
        case 'base' :
            return {
                bgColor: '#FFFFFF',
                textColor: '#000000'
            };
    }
}
