<<<<<<< HEAD
const checkBoxAgreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

// Requisito 18
checkBoxAgreement.onchange = function activeButton() {
  if (this.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};
=======
const button = document.querySelector('.buttonSubmit');
const email = document.getElementById('emailHeader');
const password = document.getElementById('passwordHeader');

function validateForm() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validateForm);
>>>>>>> aba54d251fa20a48d1a426828b02444031639287
