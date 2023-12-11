// Adicione isso ao seu arquivo script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('menu-list');

    menuToggle.addEventListener('click', function () {
        menuList.classList.toggle('show-menu');
    });

    const menuLinks = document.querySelectorAll('#menu-list a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });

            // Feche o menu após clicar em um link (útil para dispositivos móveis)
            menuList.classList.remove('show-menu');
        });
    });
});
