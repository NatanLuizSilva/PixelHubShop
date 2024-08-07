// Abre o modal com a imagem clicada
function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalImage.dataset.src = imageSrc;
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Fecha o modal ao pressionar a tecla Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Navegação entre as imagens usando as setas do teclado
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const productImages = Array.from(document.querySelectorAll('.product-item img'));

    if (modal.style.display === 'block') {
        let currentIndex = productImages.findIndex(img => img.src === modalImage.dataset.src);

        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % productImages.length;
            modalImage.src = productImages[currentIndex].src;
            modalImage.dataset.src = productImages[currentIndex].src;
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + productImages.length) % productImages.length;
            modalImage.src = productImages[currentIndex].src;
            modalImage.dataset.src = productImages[currentIndex].src;
        }
    }
});
