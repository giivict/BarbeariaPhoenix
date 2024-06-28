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