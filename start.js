let darkTheme = localStorage.getItem('darkTheme') === 'true';

if (darkTheme) {
    document.documentElement.style.setProperty('--color', 'white');
    document.documentElement.style.setProperty('--bg-color', 'black');
} else {
    document.documentElement.style.setProperty('--color', 'black');
    document.documentElement.style.setProperty('--bg-color', 'white');
}