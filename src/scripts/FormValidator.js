export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formItem = formElement;

  }

  verifyBtn(inputArray, buttonElement) {
    if(this._invalidInput(inputArray)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'true');
    }
    else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  _inputInvalid(input, errorMessage) {
    const errorElement = this._formItem.querySelector(`#error-${input.id}`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _inputValid(input) {
    const errorElement = this._formItem.querySelector(`#error-${input.id}`);
   input.classList.remove(this._inputErrorClass);
   errorElement.textContent = ' ';
  }

  _verifyInput(input) {
    if(!input.validity.valid) {
      this._inputInvalid(input, input.validationMessage)
    }
    else {
      this._inputValid(input);
    }
  }

  _setEventListener() {
    const inputArray = Array.from(this._formItem.querySelectorAll(this._inputSelector));
    const buttonElement = this._formItem.querySelector(this._submitButtonSelector);
    this.verifyBtn(inputArray, buttonElement);

    inputArray.forEach((input) => {
      input.addEventListener('input', () => {
        this._verifyInput(input);
        this.verifyBtn(inputArray, buttonElement);
      })
    })
  }

  _invalidInput(inputArray) {
    return inputArray.some((input) => {
      return !input.validity.valid;
    })
  }

  enableValidation() {
    this._setEventListener();
  }
}





