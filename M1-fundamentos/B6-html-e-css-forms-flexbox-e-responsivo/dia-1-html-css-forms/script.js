const checkboxImg = document.getElementById('concordo2');
const getNameText = document.getElementById('nome-text');

getNameText.addEventListener ('change', (event) => {
  event = getNameText.value.length;
});


const getEmailText = document.getElementById('email-text');

const getSubmitBtn = document.getElementById('submit-btn');
getSubmitBtn.addEventListener('click', (event) => {
  if (checkboxImg.checked == true && event > 10) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert ('Dados Inválidos!');
  }
});


