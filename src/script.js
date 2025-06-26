// Espera todo o conteúdo do HTML ser carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

  // --- Selecionando os elementos que vamos usar ---
  const checkinBtn = document.getElementById('daily-checkin-btn');
  const modal = document.getElementById('checkin-modal');
  const closeBtn = document.querySelector('.close-button'); // Botão 'X' para fechar
  const checkinForm = document.getElementById('checkin-form');
  const impedimentsInput = document.getElementById('impediments-input');
  const riskAlertsCount = document.getElementById('risk-alerts-count');

  // --- VERIFICAÇÃO DE ERRO ---
  // Se algum elemento essencial não for encontrado, o script para e avisa no console.
  if (!checkinBtn || !modal || !closeBtn || !checkinForm) {
    console.error("Erro Crítico: Um ou mais elementos essenciais (botão, modal, botão de fechar, formulário) não foram encontrados. Verifique os IDs e classes no seu index.html.");
    return; // Interrompe a execução para evitar mais erros.
  }

  // --- Lógica para abrir o modal ---
  checkinBtn.addEventListener('click', function() {
    // Só abre se o botão não estiver desabilitado
    if (!checkinBtn.disabled) {
      modal.style.display = 'block';
    }
  });

  // --- Lógica para fechar o modal ---
  function closeModal() {
    modal.style.display = 'none';
  }

  // Clicando no 'X'
  closeBtn.addEventListener('click', closeModal);

  // Clicando fora do modal
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  // --- Lógica para o envio do formulário ---
  checkinForm.addEventListener('submit', function(event) {
    // Previne que a página recarregue
    event.preventDefault();

    // Verifica se há impedimentos e atualiza o contador de riscos
    if (impedimentsInput.value.trim() !== '' && riskAlertsCount) {
      let currentRisks = parseInt(riskAlertsCount.textContent);
      riskAlertsCount.textContent = currentRisks + 1;
    }

    // Atualiza o botão principal
    checkinBtn.textContent = 'Check-in Realizado ✓';
    checkinBtn.classList.add('submitted');
    checkinBtn.disabled = true;

    // Fecha o modal
    closeModal();
  });

});