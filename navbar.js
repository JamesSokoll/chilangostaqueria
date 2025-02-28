document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle navigation menu on click
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });

    // Scroll effect for navbar
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.top = "0"; 
        } else {
            navbar.style.top = "0px"; 
        }
    });
});
