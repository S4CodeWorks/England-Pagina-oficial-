document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide',
        centeredSlides: true, // Garante que o slide ativo fique centralizado
        slidesPerView: 'auto', // Mostra slides com largura ajustável
        spaceBetween: 20, // Espaço entre os slides (em pixels)
    });
});

// Inicializa o Swiper para o carrossel das redes sociais
const swiper = new Swiper('.social-media-carousel', {
    // Configurações para carrossel automático
    slidesPerView: 'auto',  // Exibe slides conforme a largura
    spaceBetween: 30,  // Espaçamento entre os itens
    freeMode: true,  // Permite a rolagem livre (sem botões)
    loop: false,  // Desabilita loop (não volta para o início)
    pagination: {
        el: '.swiper-pagination',  // Paginação, se necessário
        clickable: true,  // Tornar os pontos de paginação clicáveis
    },
    breakpoints: {
        640: {
            slidesPerView: 1,  // Exibe um item por vez em telas pequenas
            spaceBetween: 20,  // Menor espaçamento
        },
        768: {
            slidesPerView: 2,  // Exibe dois itens por vez em telas médias
            spaceBetween: 30,  // Espaçamento maior
        },
        1024: {
            slidesPerView: 3,  // Exibe três itens por vez em telas grandes
            spaceBetween: 40,  // Espaçamento maior
        },
    },
});