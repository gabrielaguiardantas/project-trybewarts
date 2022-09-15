const checkBoxAgreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const li1 = document.querySelector('formData1');
const li2 = document.querySelector('formData2');
const li3 = document.querySelector('formData3');
const li4 = document.querySelector('formData4');
const li5 = document.querySelector('formData5');
const li6 = document.querySelector('formData6');
const li7 = document.querySelector('formData7');

// Requisito 18
// w3schools = For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.
checkBoxAgreement.onchange = function activeButton() {
  if (this.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

// Requisito 20
// w3schools = The target event property returns the element that triggered the event.
textArea.addEventListener('input', (e) => {
  const { target } = e;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  counter.innerHTML = `${maxLength - currentLength}`;
});
