/* ==========================================
   MARAGAMO Tech Solutions
   Main JavaScript
   Version : 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const overlay = document.getElementById("menuOverlay");

    // Sticky Navbar
    window.addEventListener("scroll", () => {

        if (window.scrollY > 50)
            navbar.classList.add("navbar-scrolled");
        else
            navbar.classList.remove("navbar-scrolled");

    });

    // Mobile Menu
    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    // Close by Overlay
    overlay.addEventListener("click", closeMenu);

    // Close by Menu Item
    document.querySelectorAll(".nav-links a").forEach(item => {

        item.addEventListener("click", closeMenu);

    });

    function closeMenu(){

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        overlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});

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