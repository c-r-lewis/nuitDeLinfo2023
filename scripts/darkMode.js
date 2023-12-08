const darkModeSwitch = document.getElementById("darkModeSwitch");
const navbar = document.querySelector(".navbar");
const body = document.body;
const protanopiaCheckbox = document.getElementById('protanopia');
const deuteranopiaCheckbox = document.getElementById('deuteranopia');
const noiretblancCheckbox = document.getElementById('noir et blanc');
const bgimg = document.querySelectorAll(".bgimg");


darkModeSwitch.addEventListener('change', () => {
    if (protanopiaCheckbox.checked || deuteranopiaCheckbox.checked || noiretblancCheckbox.checked || !(protanopiaCheckbox.checked && deuteranopiaCheckbox.checked && noiretblancCheckbox.checked)) {
        protanopiaCheckbox.disabled = true;
        deuteranopiaCheckbox.disabled = true;
        noiretblancCheckbox.disabled = true;
        protanopiaCheckbox.checked = false;
        deuteranopiaCheckbox.checked = false;
        noiretblancCheckbox.checked = false;
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
        noiretblancCheckbox.disabled = false;
    }
})

protanopiaCheckbox.addEventListener('change', () => {
    if (protanopiaCheckbox.checked) {
        if (darkModeSwitch.checked) {
            protanopiaCheckbox.disabled = true;
        }
        else {
            deuteranopiaCheckbox.disabled = true;
            noiretblancCheckbox.disabled = true;
        }
        updateColors('protanopia');
        bgimg.forEach(imagep => {
            imagep.style.filter = 'hue-rotate(15deg)';
        });
    }
    else {
        deuteranopiaCheckbox.disabled = false;
        noiretblancCheckbox.disabled = false;
        updateColors('base');
        bgimg.forEach(imagep => {
            imagep.style.filter = 'hue-rotate(0deg)';
        });
    }
});

deuteranopiaCheckbox.addEventListener('change', () => {
    if (deuteranopiaCheckbox.checked) {
        if (darkModeSwitch.checked) {
            deuteranopiaCheckbox.disabled = true;
        } else {
            protanopiaCheckbox.disabled = true;
            noiretblancCheckbox.disabled = true;
        }
        updateColors('deuteranopia');
        bgimg.forEach(imaged => {
            imaged.style.filter = 'hue-rotate(345deg)';
        });
    }
    else {
        protanopiaCheckbox.disabled = false;
        noiretblancCheckbox.disabled = false;
        updateColors('base');
        bgimg.forEach(imaged => {
            imaged.style.filter = 'hue-rotate(0deg)';
        });
    }
});

noiretblancCheckbox.addEventListener('change', () => {
    if (noiretblancCheckbox.checked) {
        if (darkModeSwitch.checked) {
            noiretblancCheckbox.disabled = true;
        } else {
            protanopiaCheckbox.disabled = true;
            deuteranopiaCheckbox.disabled = true;
        }
        updateColors('tritanopia');
        bgimg.forEach(imageld => {
            imageld.style.filter = 'grayscale(100%)';
        });
    }
    else {
        protanopiaCheckbox.disabled = false;
        deuteranopiaCheckbox.disabled = false;
        updateColors('base');
        bgimg.forEach(imageld => {
            imageld.style.filter = 'grayscale(0%)';
        });
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
