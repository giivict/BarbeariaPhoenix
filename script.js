// Equipe

function showText(id) {
    var texts = document.querySelectorAll('.text');
    texts.forEach(function(text) {
        text.style.display = 'none';
    });

    var textToShow = document.getElementById(id);
    textToShow.style.display = 'block';
    textToShow.scrollIntoView({ block: 'center' });
}

// Serviços

const itemsPerPage = 6;
let currentPage = 0;

const serviceItems = document.querySelectorAll('.service-item');
const totalItems = serviceItems.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function showPage(page) {
    currentPage = page;
    serviceItems.forEach((item, index) => {
        if (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    
    leftArrow.style.display = currentPage === 0 ? 'none' : 'block';
    rightArrow.style.display = currentPage === totalPages - 1 ? 'none' : 'block';
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(0);
});
