document.addEventListener('DOMContentLoaded', function() {

  const checkinBtn = document.getElementById('daily-checkin-btn');
  const modal = document.getElementById('checkin-modal');
  const closeBtn = document.querySelector('.close-button'); 
  const checkinForm = document.getElementById('checkin-form');
  const impedimentsInput = document.getElementById('impediments-input');
  const riskAlertsCount = document.getElementById('risk-alerts-count');

  if (!checkinBtn || !modal || !closeBtn || !checkinForm) {
    console.error("Erro: Um ou mais elementos do check-in não foram encontrados no HTML.");
    return; 
  }

  checkinBtn.addEventListener('click', function() {
    if (!checkinBtn.disabled) {
      modal.style.display = 'block';
    }
  });

  function closeModal() {
    modal.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  checkinForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (impedimentsInput.value.trim() !== '' && riskAlertsCount) {
      let currentRisks = parseInt(riskAlertsCount.textContent);
      riskAlertsCount.textContent = currentRisks + 1;
    }

    checkinBtn.textContent = 'Check-in Realizado ✓';
    checkinBtn.classList.add('submitted');
    checkinBtn.disabled = true;

    closeModal();
  });

});