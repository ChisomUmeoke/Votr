const hamburger = document.querySelector(".hamburger");
const headNav = document.querySelector(".headnav");

hamburger.addEventListener("click", responsiveMobile);

function responsiveMobile() {
    hamburger.classList.toggle("active");
    headNav.classList.toggle("active");
}


