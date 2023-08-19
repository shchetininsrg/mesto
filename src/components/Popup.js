export default class Popup {
    constructor(selectorPopup) {
        this.selectorPopup =  document.querySelector(selectorPopup)
        this._closeEscPopup = this._closeEscPopup.bind(this);
        this._button = this.selectorPopup.querySelector('.popup__close-btn')
    }

    open(){
        this.selectorPopup.classList.add('popup_open')
        document.addEventListener('keydown', this._closeEscPopup)
    }
    close(){
        this.selectorPopup.classList.remove('popup_open')
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
        this.selectorPopup.addEventListener("mousedown", this.overlayClose);

        this._button.addEventListener('click', () => {
            this.close()
        })
        }

}