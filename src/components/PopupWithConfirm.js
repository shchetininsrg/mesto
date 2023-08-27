import Popup from "./Popup";
export default class PopupWithConfirm extends Popup {
    constructor(popup, deleteCardSubmit){
        super(popup)
        this._deleteCardSubmit = deleteCardSubmit
        this._form = this.popup.querySelector('.popup__form')
    }

    setEventListener(){
        super.setEventListener()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._deleteCardSubmit(this._item, this._cardId)
        })
    }

    open = (item, cardId) => {
        super.open()
        this._item = item
        this._cardId = cardId
    }
}