const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const content = document.querySelector(".content");
    const mediaQuery = window.matchMedia("(max-width: 758px)");

    if (mediaQuery.matches) {
        burger.addEventListener("click", () => {
            // Toggle Nav
            nav.classList.toggle("nav-active");
            content.classList.toggle("show-content");
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            // Burger Animation
            burger.classList.toggle("toggle");
        });
    } else {
        window.addEventListener("load", () => {
            content.classList.add("show-content");
        });
    }
};

navSlide();