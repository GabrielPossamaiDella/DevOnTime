// Função para abrir o modal
function openModal() {
  const modal = document.getElementById('checkin-modal');
  if (modal) {
    modal.style.display = 'block';
  }
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('checkin-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Adiciona a funcionalidade de fechar o modal clicando fora dele
window.onclick = function(event) {
  const modal = document.getElementById('checkin-modal');
  if (event.target == modal) {
    closeModal();
  }
}