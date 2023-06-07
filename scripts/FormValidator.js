export class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formItem = formElement;

  }
  _showInputError(input, errorMessage) {
    const errorElement = this._formItem.querySelector(`#error-${input.id}`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const errorElement = this._formItem.querySelector(`#error-${input.id}`);
   input.classList.remove(this._inputErrorClass);
   errorElement.textContent = ' ';
  }

  _isValid(input) {
    if(!input.validity.valid) {
      this._showInputError(input, input.validationMessage)
    }
    else {
      this._hideInputError(input);
    }
  }

  _setEventListener() {
    const inputList = Array.from(this._formItem.querySelectorAll(this._inputSelector));
    const buttonElement = this._formItem.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState(inputList, buttonElement);
      })
    })
  }

  _invalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    })
  }

  _disableBtnSubmit(buttonElement) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  }
  _enableBtnSubmit(buttonElement) {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }

  _toggleButtonState(inputList, buttonElement) {
    if(this._invalidInput(inputList)) {
      this._disableBtnSubmit(buttonElement);
    }
    else {
      this._enableBtnSubmit(buttonElement);
    }
  };
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
        this._setEventListener();
    });
  }
}





