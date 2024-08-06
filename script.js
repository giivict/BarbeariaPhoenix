// Página Principal

let currentIndex = 0;
const images = document.querySelectorAll('.imgmeio');
const dots = document.querySelectorAll('.dot');
const container = document.querySelector('.carousel-container');

function showImage(index) {
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showImage(index);
}

// Chama a função para iniciar o carrossel
setInterval(showNextImage, 3000); // Muda a cada 3 segundos

// Inicializa a primeira imagem como visível quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    showImage(0);

    // Configura o Hammer.js para detectar gestos de swipe
    const hammer = new Hammer(container);

    hammer.on('swipeleft', () => {
        showNextImage();
    });

    hammer.on('swiperight', () => {
        showPreviousImage();
    });

    let startX = 0;
    let currentX = 0;

    hammer.on('panstart', (e) => {
        startX = e.center.x;
    });

    hammer.on('panmove', (e) => {
        currentX = e.center.x;
        const diffX = currentX - startX;
        const offset = -currentIndex * 100 + (diffX / container.clientWidth) * 100;
        container.style.transform = `translateX(${offset}%)`;
    });

    hammer.on('panend', (e) => {
        if (e.deltaX < -50) {
            showNextImage();
        } else if (e.deltaX > 50) {
            showPreviousImage();
        } else {
            showImage(currentIndex);
        }
    });
});



// Serviços

let currentPage = 0;
const itemsPerPage = 6;
const serviceList = document.querySelector('.service-list');
const services = document.querySelectorAll('.service-item');
const totalPages = Math.ceil(services.length / itemsPerPage);

function updateServices() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    services.forEach((service, index) => {
        if (index >= start && index < end) {
            service.style.display = 'block';
        } else {
            service.style.display = 'none';
        }
    });
    document.getElementById('left-arrow').style.display = currentPage === 0 ? 'none' : 'block';
    document.getElementById('right-arrow').style.display = currentPage === totalPages - 1 ? 'none' : 'block';

}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateServices();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateServices();
    }
}

updateServices();

function enviarMensagem(servico) {
    const numeroTelefone = '5511964538195';
    const mensagem = `Olá, gostaria de marcar um horário para realizar ${servico}`;
    const link = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}



// Equipe

function showText(id) {
    var texts = document.querySelectorAll('.text');
    texts.forEach(function (text) {
        text.style.display = 'none';
    });

    var textToShow = document.getElementById(id);
    textToShow.style.display = 'block';
    textToShow.scrollIntoView({ block: 'center' });
}


