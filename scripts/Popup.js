export default class Popup {
    constructor(selectorPopup) {
        this.selectorPopup =  selectorPopup
    }

    open(){
        this.selectorPopup.classList.add('popup_open')
        document.addEventListener('keydown', closeEscPopup)
    }
    close(){
        this.selectorPopup.classList.remove('popup_open')
        document.addEventListener('keydown', closeEscPopup)
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
        }

}