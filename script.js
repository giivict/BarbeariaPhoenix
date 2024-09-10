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

let currentPage = 0;
let itemsPerPage;
const services = document.querySelectorAll('.service-item');
let totalPages;

function updateItemsPerPage() {
    itemsPerPage = window.innerWidth <= 600 ? 3 : 6;
    totalPages = Math.ceil(services.length / itemsPerPage);
}

function updateServices() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    services.forEach((service, index) => {
        service.style.transition = 'transform 0.3s ease-in-out';  
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

window.addEventListener('resize', () => {
    updateItemsPerPage();
    currentPage = Math.min(currentPage, totalPages - 1);
    updateServices();
});

updateItemsPerPage();
updateServices();


let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (touchEndX < touchStartX - 50) { 
        nextPage();
    } else if (touchEndX > touchStartX + 50) { 
        prevPage();
    }
}

const servicesWrapper = document.querySelector('.services-wrapper');

servicesWrapper.addEventListener('touchstart', handleTouchStart, false);
servicesWrapper.addEventListener('touchmove', handleTouchMove, false);
servicesWrapper.addEventListener('touchend', handleTouchEnd, false);

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


