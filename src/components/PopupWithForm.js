import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popup, handlerSubmit){
        super(popup)
        this._form = this.popup.querySelector('.popup__form')
        this._handlerSubmit = handlerSubmit
        this._inputArray = Array.from(this.popup.querySelectorAll('.popup__input'))
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
        this._form.addEventListener('submit', (evt) => {
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
        this._form.reset()
    }

}