// общая функция валидации
const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  const formsArr = Array.from(forms)
  formsArr.forEach((form) => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.reset()
      verifBtn(config, form);
    });
    verifBtn(config, form);
    const inputs = form.querySelectorAll(config.inputSelector);
    const inputsArr = Array.from(inputs);
    inputsArr.forEach(function (input) {
        input.addEventListener('input', () => {
            verifInput(config, input, form);
            verifBtn(config, form);
        });
    });
  })
}
// валидация полей ввода
const validInput = (config, input, errorMessage) => {
  input.classList.remove(config.inputErrorClass);
  errorMessage.textContent = '';
}

const invalidInput = (config, input, errorMessage) => {
  input.classList.add(config.inputErrorClass);
  errorMessage.textContent = input.validationMessage;
}

const verifInput = (config, input, form) => {
  const errorMessage = form.querySelector(`#error-${input.id}`);
  if (input.checkValidity()) {
      validInput(config, input, errorMessage);
  } else {
      invalidInput(config, input, errorMessage);
  }
}
// валидация кнопки формы
const offBtnSave = (config, button) => {
  button.setAttribute('disabled', 'true');
  button.classList.add(config.inactiveButtonClass);
}

const onBtnSave = (config, button) => {
  button.removeAttribute('disabled');
  button.classList.remove(config.inactiveButtonClass);
}

const verifBtn = (config, form) => {
  const submitButton = form.querySelector(config.submitButtonSelector);
  if (form.checkValidity()) {
      onBtnSave(config, submitButton);
  } else {
      offBtnSave(config, submitButton);
  }
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_error',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error'
  });
