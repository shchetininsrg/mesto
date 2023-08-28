import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popup){
        super(popup)
        this._popupImg = document.querySelector('.popup__img')
        this._title = document.querySelector('.popup__text')
    }

    open(name, link) {
        super.open()
        this._popupImg.src = link
        this._title.textContent = name
        this._popupImg.alt = name
    }
}