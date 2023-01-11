const button = document.querySelector('.buttonSubmit');
const checkBoxAgreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const email = document.getElementById('emailHeader');
const password = document.getElementById('passwordHeader');
const li1 = document.querySelector('#formData1');
const li2 = document.querySelector('#formData2');
const li3 = document.querySelector('#formData3');
const li4 = document.querySelector('#formData4');
const li5 = document.querySelector('#formData5');
const li6 = document.querySelector('#formData6');
const li7 = document.querySelector('#formData7');
const optionHouse = document.getElementsByClassName('optionHouse');

// requisito1 - validar se o possuem email e senha corretos
function validateForm() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Requisito 18
// w3schools = For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.
checkBoxAgreement.onchange = function activeButton() {
  if (this.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

button.addEventListener('click', validateForm);

// Requisito 20
// w3schools = The target event property returns the element that triggered the event.
textArea.addEventListener('input', (e) => {
  const { target } = e;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  counter.innerHTML = maxLength - currentLength;
});

// Requisito 21
function li1on() {
  const name = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  li1.innerHTML = `${name.value} ${lastName.value}`;
}
function li2on() {
  const emailInput = document.querySelector('#input-email');
  li2.innerHTML = `${emailInput.value}`;
}
function li3on() {
  for (let i = 0; i < optionHouse.length; i += 1) {
    if (optionHouse[i].selected === true) {
      li3.innerHTML = optionHouse[i].value;
    }
  }
}
function li4on() {
  const familyLabel = document.getElementsByClassName('familyLabel');
  for (let i = 0; i < familyLabel.length; i += 1) {
    if (familyLabel[i].checked === true) {
      li4.innerHTML = familyLabel[i].value;
    }
  }
}
function li5on() {
  const learnContent = document.getElementsByClassName('subject');
  const li5array = [];
  for (let i = 0; i < learnContent.length; i += 1) {
    if (learnContent[i].checked === true) {
      li5array.push(learnContent[i].value);
      li5.innerHTML = li5array.join(', ').toString();
    }
  }
}
function li6on() {
  const labelRate = document.getElementsByClassName('label-rate');
  for (let i = 0; i < labelRate.length; i += 1) {
    if (labelRate[i].checked === true) {
      li6.innerHTML = labelRate[i].value;
    }
  }
}
function li7on() {
  li7.innerHTML = textArea.value;
}
function retrieveFormInfo() {
  li1on();
  li2on();
  li3on();
  li4on();
  li5on();
  li6on();
  li7on();
  document.getElementsByTagName('main')[0].style.display = 'none';
}

submitBtn.addEventListener('click', retrieveFormInfo);
