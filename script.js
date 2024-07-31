// Página Principal

let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.imgmeio');
    images.forEach((image, index) => {
        image.classList.remove('active');
        if (index === currentIndex) {
            image.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}

// Chama a função para iniciar o carrossel
setInterval(showNextImage, 3000); // Muda a cada 3 segundos

// Inicializa a primeira imagem como visível quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.imgmeio')[0].classList.add('active');
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


