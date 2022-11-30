
/* ScrollReveal */

var smarthPhone = window.matchMedia("(max-width: 600px)")

if (smarthPhone <= window.matchMedia("(max-width:800px")) {
    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.sub', { delay: 1000 });
    sr.reveal('.links_externos', { delay: 1000 });
    sr.reveal('.projetos', { delay: 500 });
    sr.reveal('.habilidades', { delay: 1000 });
    sr.reveal('.sobre', { delay: 1000 });
    sr.reveal('.contato', { delay: 500 });
} else {

    window.sr = ScrollReveal({ reset: false });

}















