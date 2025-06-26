// Funções para controlar o modal de check-in
const modal = document.getElementById('checkin-modal');

function openModal() {
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = 'none';
  }
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
