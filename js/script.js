// Esperar que o DOM seja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do carrossel
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    // Controle do menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    // Configuração inicial
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Funções para o carrossel
    function showSlide(n) {
        // Remover classe active de todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Adicionar classe active ao slide atual
        slides[n].classList.add('active');
        currentSlide = n;
    }
    
    function nextSlide() {
        // Ir para o próximo slide ou voltar para o primeiro
        if (currentSlide === totalSlides - 1) {
            showSlide(0);
        } else {
            showSlide(currentSlide + 1);
        }
    }
    
    function prevSlide() {
        // Ir para o slide anterior ou para o último
        if (currentSlide === 0) {
            showSlide(totalSlides - 1);
        } else {
            showSlide(currentSlide - 1);
        }
    }
    
    // Configurar a troca automática de slides a cada 5 segundos
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Parar o carrossel automático quando o mouse está sobre ele
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Reiniciar o carrossel automático quando o mouse sai
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Adicionar eventos aos botões do carrossel
    nextBtn.addEventListener('click', () => {
        nextSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
    });
    
    // Toggle do menu mobile
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        
        // Adicionar animação ao ícone do hambúrguer
        const hamburger = menuToggle.querySelector('.hamburger');
        hamburger.classList.toggle('active');
    });
    
    // Fechar o menu ao clicar em um link (para mobile)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuToggle.querySelector('.hamburger').classList.remove('active');
            }
        });
    });
    
    // Adicionar estilo CSS para o hamburger quando ativo
    const style = document.createElement('style');
    style.innerHTML = `
        .hamburger.active {
            background-color: transparent;
        }
        .hamburger.active::before {
            transform: rotate(45deg);
            top: 0;
        }
        .hamburger.active::after {
            transform: rotate(-45deg);
            top: 0;
        }
    `;
    document.head.appendChild(style);
});