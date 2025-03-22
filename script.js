const burger = document.getElementById('burger');
const dropdown = document.getElementById('dropdown');

burger.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});
