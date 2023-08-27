export default class Popup {
    constructor(popup) {
        this.popup =  document.querySelector(popup)
        this._closeEscPopup = this._closeEscPopup.bind(this);
        this._button = this.popup.querySelector('.popup__close-btn')
    }

    open(){
        this.popup.classList.add('popup_open')
        document.addEventListener('keydown', this._closeEscPopup)
    }
    close(){
        this.popup.classList.remove('popup_open')
        document.removeEventListener('keydown', this._closeEscPopup)
    }

    _closeEscPopup(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    overlayClose = (evt) => {
        if (evt.currentTarget === evt.target) {
            this.close();
          }
      }
    setEventListener() {
        this.popup.addEventListener("mousedown", this.overlayClose);

        this._button.addEventListener('click', () => {
            this.close()
        })
        }

}