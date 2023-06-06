export class Card {
  constructor(name, img, templateElement) {
    this._name = name
    this._img = img
    this._templateElement = templateElement
  }
  _getTemplate(){
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.photo-cards__item').cloneNode(true);
    return cardTemplate;
  }

  generateCard(){
    this._item = this._getTemplate()
    this._item.querySelector('.photo-cards__title').textcontent = this.name
    this._item.querySelector('.photo-cards__title').alt = this.name
    this._item.querySelector('.photo-cards__img').src = this.img

    return this._item
  }

}
