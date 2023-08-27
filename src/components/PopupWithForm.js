import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(selectorPopup, handlerSubmit){
        super(selectorPopup)
        this._selectorForm = this.selectorPopup.querySelector('.popup__form')
        this._handlerSubmit = handlerSubmit
        this._inputArray = Array.from(this.selectorPopup.querySelectorAll('.popup__input'))
        this._submitButton = this._form.querySelector('.popup__save-btn')
        this._submitButtonText = this._submitButton.textContent
    }

    _getInputValues() {
        const inputs = {}
        this._inputArray.forEach((input) => {
            inputs[input.name] = input.value
        })
        return inputs
    }

    setEventListener() {
        super.setEventListener()
        this._selectorForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitButton.textContent = `${this._submitButton.textContent}...`
            this._handlerSubmit(this._getInputValues())
        })
    }

    setLoadingText() {
        this._submitButton.textContent = this._submitButtonText
    }

    close(){
        super.close()
        this._selectorForm.reset()
    }

}