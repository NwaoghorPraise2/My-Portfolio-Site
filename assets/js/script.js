const navMenu = document.getElementById('main-nav');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

navOpen.addEventListener("click", () => {
    navMenu.classList.add("show-menu");

});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");

});

