/* ==========================================
   MARAGAMO Tech Solutions
   Main JavaScript
   Version : 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 MARAGAMO Tech Solutions Website Loaded");

    initializeNavigation();

});

/* ==========================================
   Navigation
========================================== */

function initializeNavigation() {

    const navbar = document.querySelector(".navbar");

    if (!navbar)
        return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        }
        else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}

/* ==========================================
   Future Features
========================================== */

/*

Upcoming Features

✔ Mobile Menu

✔ Hero Animation

✔ Counter Animation

✔ Scroll Reveal

✔ Smooth Scroll

✔ Day / Night Transition

✔ Coffee Steam Animation

✔ Live Coding Laptop

✔ Mouse Parallax

✔ Floating Particles

*/