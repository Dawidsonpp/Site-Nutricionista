// EFEITO DO HEADER AO ROLAR A PÁGINA
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// LÓGICA DO SLIDER DE DEPOIMENTOS
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

function showSlide(n) {
    // Esconde todos os slides
    slides.forEach(slide => slide.classList.remove('active'));
    // Garante que o índice seja cíclico
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    // Mostra o slide correto
    slides[currentSlide].classList.add('active');
}

// Event Listeners para os botões
nextBtn.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

// Inicia o slider
showSlide(currentSlide);

// ... (seu código JS anterior para o header e o slider) ...


// ... (seu código JS anterior para header, slider de depoimentos, etc.) ...


// LÓGICA PARA O CARROSSEL AUTOMÁTICO DA SEÇÃO DE TRATAMENTOS
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('[data-slider]');

    sliders.forEach(slider => {
        const cards = slider.querySelectorAll('.card');
        let currentCardIndex = 0;
        const slideInterval = 3000; // Tempo em milissegundos (3 segundos)

        function showNextCard() {
            // Remove a classe 'active' do card atual
            cards[currentCardIndex].classList.remove('active');

            // Avança para o próximo card
            currentCardIndex = (currentCardIndex + 1) % cards.length;

            // Adiciona a classe 'active' ao novo card
            cards[currentCardIndex].classList.add('active');
        }

        // Inicia o ciclo
        setInterval(showNextCard, slideInterval);
    });
});

// LÓGICA DO MENU HAMBÚRGUER
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

// Abre/fecha o menu ao clicar no ícone
menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Fecha o menu ao clicar em um dos links
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});