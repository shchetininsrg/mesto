import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(selectorPopup, handlerSubmit){
        super(selectorPopup)
        this._selectorForm = this.selectorPopup.querySelector('.popup__form')
        this._handlerSubmit = handlerSubmit
        this._inputArray = Array.from(this.selectorPopup.querySelectorAll('.popup__input'))
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
            this._handlerSubmit(this._getInputValues())
            this.close()
            this._selectorForm.reset()
        })
    }

}