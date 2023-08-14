import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(selectorPopup, selectorImg, selectorDescription){
        super(selectorPopup)
        this._selectorImg = document.querySelector(selectorImg)
        this._selectorDescription = document.querySelector(selectorDescription)
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