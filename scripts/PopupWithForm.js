import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(selectorPopup, selectorForm, handlerSubmit = null){
        super(selectorPopup)
        this._selectorForm = document.querySelector(selectorForm)
        this._handlerSubmit = handlerSubmit
        this._inputArray = Array.from(this._selectorForm.querySelectorAll('.popup__input'))
    }

    _getInputValues() {
        const inputs = {}
        this._inputArray.forEach(input => {
            inputs[input.name] = input.value
        })
        return inputs
    }

    setEventListener() {
        super.setEventListener()
        this._selectorForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this._handlerSubmit(this._getInputValues())
        this.close()
        this._selectorForm.reset()
        })
    }
}