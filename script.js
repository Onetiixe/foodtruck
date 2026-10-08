/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("open");

    });


    document.querySelectorAll(".nav a").forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

        });

    });

}


/* =========================
   FILTRE DE LA CARTE
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;


        /* Retire la classe active de tous les boutons */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Active le bouton sélectionné */

        button.classList.add("active");


        /* Affiche les bons produits */

        menuCards.forEach(function (card) {

            const category = card.dataset.category;


            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   FORMULAIRE CONTACT
========================= */

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        formMessage.textContent =
            "Merci pour votre message. Nous vous répondrons rapidement.";


        contactForm.reset();

    });

}


/* =========================
   ANNÉE AUTOMATIQUE
========================= */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}