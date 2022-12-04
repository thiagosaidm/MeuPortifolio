
/* ScrollReveal */

    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.sub', { delay: 1000 });
    sr.reveal('.links_externos', { delay: 1000 });
    sr.reveal('.projetos', { delay: 500 });
    sr.reveal('.habilidades', { delay: 1000 });
    sr.reveal('.sobre', { delay: 1000 });
    sr.reveal('.contato', { delay: 500 });

/* Menu Hamburger */

const menuBtn = document.querySelector(".btn_menu");

function mostrarMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('on');
}

menuBtn.addEventListener("click", mostrarMenu)















