// Inicialização do Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões que abrem modais
    const modalButtons = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const backdrop = document.querySelector('.modal-backdrop');

    // Função para abrir o modal
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    };

    // Função para fechar todos os modais
    const closeModal = () => {
        modals.forEach(modal => modal.style.display = 'none');
        backdrop.style.display = 'none';
    };

    // Adiciona eventos de clique nos botões
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Adiciona eventos para fechar os modais
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Fecha o modal ao clicar no backdrop
    backdrop.addEventListener('click', closeModal);
});


// Responsividade do Menu
const menuButton = document.createElement('button');
menuButton.classList.add('menu-toggle');
menuButton.innerHTML = '<i class="fas fa-bars"></i>';

const nav = document.querySelector('nav');
nav.appendChild(menuButton);

menuButton.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
});

/******  MENU HAMBURGUER  *****/
// Seleciona o botão e o menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

// Adiciona evento de clique para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Alterna a exibição do menu
});
