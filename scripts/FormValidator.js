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
  _offBtnSave(buttonElement) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  }
  _onBtnSave(buttonElement) {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }

  _verifyBtn(inputList, buttonElement) {
    if(this._invalidInput(inputList)) {
      this._offBtnSave(buttonElement);
    }
    else {
      this._onBtnSave(buttonElement);
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
    const inputList = Array.from(this._formItem.querySelectorAll(this._inputSelector));
    const buttonElement = this._formItem.querySelector(this._submitButtonSelector);
    this._verifyBtn(inputList, buttonElement);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._verifyInput(input);
        this._verifyBtn(inputList, buttonElement);
      })
    })
  }

  _invalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    })
  }

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





