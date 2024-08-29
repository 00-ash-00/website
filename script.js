document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('menu__toggle');
    const menuItems = document.querySelectorAll('.menu__item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });
});