document.getElementById('addImageBtn').addEventListener('click', function() {
    const imageGallery = document.querySelector('.image-gallery');

    // Criando uma nova imagem
    const newImage = document.createElement('img');
    newImage.src = 'https://via.placeholder.com/200'; // Imagem de exemplo

    // Adicionando a nova imagem à galeria
    imageGallery.appendChild(newImage);
});