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
