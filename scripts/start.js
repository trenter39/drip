let darkTheme = localStorage.getItem('darkTheme') === 'true';

if (darkTheme) {
    document.documentElement.style.setProperty('--color', 'white');
    document.documentElement.style.setProperty('--bg-color', 'black');
    document.documentElement.style.setProperty('--border-color', '#3F444C');
} else {
    document.documentElement.style.setProperty('--color', 'black');
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--border-color', '#D3D9DF');
}