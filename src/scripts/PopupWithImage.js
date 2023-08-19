import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(selectorPopup){
        super(selectorPopup)
        this._selectorImg = document.querySelector('.popup__img')
        this._selectorDescription = document.querySelector('.popup__text')
    }

    open(name, link) {
        super.open()
        this._selectorImg.src = link
        this._selectorDescription.textContent = name
        this._selectorImg.alt = name
    }

    close() {
        super.close()
    }

    setEventListener(){
        super.setEventListener()
    }
}