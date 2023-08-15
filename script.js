// Récupération des éléments du DOM
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list ul');

// Ajout d'un gestionnaire d'événement pour le clic sur l'icône du menu
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});
