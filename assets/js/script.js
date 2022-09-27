const navMenu = document.getElementById('main-nav');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

navOpen.addEventListener("click", () => {
    navMenu.classList.add("show-menu");

});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");

});

//Remove menu on click################
const navLink = document.querySelectorAll('.nav-link');

linkAction = () => {
    navMenu.classList.remove('show-menu');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));

//Make Active Link #################
const sections = document.querySelectorAll("section[id");

activeScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.main-nav a[href*=' + sectionId + ']').classList.add('active-link');

        } else {
            document.querySelector('.main-nav a[href*=' + sectionId + ']').classList.remove('active-link');
        }

    });
} 
window.addEventListener('scroll', activeScroll);