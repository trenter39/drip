const favicon = document.getElementById('favicon');

const burger = document.getElementById('burger');
const dropdown = document.getElementById('dropdown');
const theme = document.getElementById('theme');

if (darkTheme) {
    setFavicon('icons/logoB.ico');
} else {
    setFavicon('icons/logo.ico');
}

burger.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

theme.addEventListener('click', () => {
    changeTheme();
});

function setFavicon(iconPath) {
    if (favicon) {
        favicon.href = iconPath;
    }
}

function changeTheme() {
    if (darkTheme) {
        document.documentElement.style.setProperty('--color', 'black');
        document.documentElement.style.setProperty('--bg-color', 'white');
        setFavicon('icons/logo.ico');
    } else {
        document.documentElement.style.setProperty('--color', 'white');
        document.documentElement.style.setProperty('--bg-color', 'black');
        setFavicon('icons/logoB.ico');
    }
    darkTheme = !darkTheme;
    localStorage.setItem('darkTheme', darkTheme);
}