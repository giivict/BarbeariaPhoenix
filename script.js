// Menu navegação

document.getElementById("menuIcon").onclick = function() {
    var menuOverlay = document.getElementById("menuOverlay");
    if (window.innerWidth <= 600) {
        if (menuOverlay.style.right === "0px") {
            menuOverlay.style.right = "-250px";
        } else {
            menuOverlay.style.right = "0px";
        }
    }
};


window.onresize = function() {
    if (window.innerWidth > 600) {
        document.getElementById("menuOverlay").style.right = "-250px";
        document.querySelector(".menu").style.display = "flex"; 
    }
};


// Página Principal

let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.imgmeio');
    const dots = document.querySelectorAll('.dot');
    images.forEach((image, i) => {
        image.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            image.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.imgmeio').length;
    showImage(currentIndex);
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.imgmeio').length) % document.querySelectorAll('.imgmeio').length;
    showImage(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showImage(index);
}

setInterval(showNextImage, 3000); 

document.addEventListener('DOMContentLoaded', () => {
    showImage(0);

    const carousel = document.querySelector('.carousel-container');
    const hammer = new Hammer(carousel);

    hammer.on('swipeleft', () => {
        showNextImage();
    });

    hammer.on('swiperight', () => {
        showPreviousImage();
    });
});


// Serviços

// Código JavaScript existente

let currentPage = 0;
const itemsPerPage = 6;
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

// Novo código JavaScript para adicionar funcionalidade de deslizar

const servicesWrapper = document.getElementById('services');
let startX;

servicesWrapper.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

servicesWrapper.addEventListener('touchmove', function(e) {
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;

    if (diffX > 50) {
        nextPage();
    } else if (diffX < -50) {
        prevPage();
    }
});




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


