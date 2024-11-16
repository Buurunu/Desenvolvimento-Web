// Selecionar o elemento de áudio e o botão
const audio = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');

// Adicionar o evento de clique no botão
muteButton.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;  // Desmutar o áudio
        muteButton.textContent = '🔊 Mutar';  // Alterar texto do botão
    } else {
        audio.muted = true;  // Mudar para mudo
        muteButton.textContent = '🔇 Desmutar';  // Alterar texto do botão
    }
});
