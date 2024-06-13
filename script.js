// Equipe

function showText(id) {
    var texts = window.document.querySelectorAll(`.text`);
    texts.forEach(function(text) {
        text.style.display = `none`;
    });

    var textToShow = window.document.getElementById(id);
    textToShow.style.display = `block`;
}