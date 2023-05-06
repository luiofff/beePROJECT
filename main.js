function activeFlowers() {
    const scrollPosition = window.scrollY > 420;
    document.querySelector(".flower-f").classList.toggle("flower-active", scrollPosition);
    document.querySelector(".flower-s").classList.toggle("flower-s-active", scrollPosition);
}

window.addEventListener('scroll', activeFlowers)