export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formItem = formElement;
    this._buttonElement = this._formItem.querySelector(this._submitButtonSelector)
    this._inputArray = Array.from(this._formItem.querySelectorAll(this._inputSelector));
  }

  verifyBtn() {
    if(this._invalidInput(this._inputArray)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'true');
    }
    else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
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
    this.verifyBtn();

    this._inputArray.forEach((input) => {
      input.addEventListener('input', () => {
        this._verifyInput(input);
        this.verifyBtn();
      })
    })
  }

  _invalidInput() {
    return this._inputArray.some((input) => {
      return !input.validity.valid;
    })
  }

  enableValidation() {
    this._setEventListener();
  }
}





