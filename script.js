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
