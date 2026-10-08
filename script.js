/* =====================================================
   LES FAIM'BULEUSES
   JAVASCRIPT
===================================================== */


/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");


menuToggle.addEventListener("click", function () {

    nav.classList.toggle("open");

});


/* Fermer le menu après avoir cliqué sur un lien */

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});



/* =====================================================
   FILTRE DE LA CARTE
===================================================== */

const filters =
    document.querySelectorAll(".filter");


const cards =
    document.querySelectorAll(".menu-card");


filters.forEach(function (filter) {

    filter.addEventListener("click", function () {


        /* Retire la classe active */

        filters.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Active le bouton sélectionné */

        filter.classList.add("active");


        /* Récupère la catégorie */

        const category =
            filter.dataset.category;


        /* Affiche / cache les produits */

        cards.forEach(function (card) {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});



/* =====================================================
   FORMULAIRE DE CONTACT
===================================================== */

const form =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


form.addEventListener("submit", function (event) {

    /* Empêche le rechargement de la page */

    event.preventDefault();


    /* Message */

    formMessage.textContent =
        "Merci ❤️ Votre message a bien été préparé !";


    /* Vide le formulaire */

    form.reset();

});



/* =====================================================
   ANNÉE AUTOMATIQUE
===================================================== */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();