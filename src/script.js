// Seleciona a galeria e o botão
const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('addImageBtn');

// Função para adicionar mais imagens
function loadMoreImages() {
    // Criar novas imagens dinamicamente
    const imageFolderPath = 'assets/img/';

    const newImages = [
        'imagem5.jpg',
        'imagem6.jpg',
        'imagem7.jpg',
        'imagem8.png',
        'imagem9.jpg',
        'imagem10.jpg',
        'imagem11.png',
        'imagem12.jpg',
    ];

 // Percorre as novas imagens e adiciona à galeria
 newImages.forEach(function(imageName) {
    const img = document.createElement('img'); // Cria um novo elemento <img>
    img.src = imageFolderPath + imageName; // Define a fonte da imagem concatenando o caminho
    img.alt = `Imagem ${gallery.children.length + 1}`; // Define o atributo alt
    img.style.width = 'calc(25% - 15px)'; // Define o estilo para a largura

    gallery.appendChild(img); // Adiciona a imagem à galeria
});
}

// Adiciona o evento de clique ao botão
loadMoreButton.addEventListener('click', loadMoreImages);