// Récupération des éléments du DOM
const menuIcon = document.querySelector('.menu-icon');
const subMenu = document.querySelector('.sub-menu');

// Ajout d'un gestionnaire d'événement pour le clic sur l'icône du menu
menuIcon.addEventListener('click', () => {
    subMenu.classList.toggle('active');
});
