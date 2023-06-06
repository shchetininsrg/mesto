import { openImgPopup } from './index.js'

export class Card {
  constructor(cardData, templateElement) {
    this._name = cardData.name
    this._link = cardData.link
    this._templateElement = templateElement
  }
  _getTemplate(){
    const cardTemplate = document.querySelector(this._templateElement).content.querySelector('.photo-cards__item').cloneNode(true);
    return cardTemplate;
  }

  _handleLike(){
    this._item.querySelector('.photo-cards__like').classList.toggle('photo-cards__like_active')
  }

  _handleDelete(){
    this._item.remove()
  }

  _setEventListeners() {
    this._item.querySelector('.photo-cards__like').addEventListener('click', () =>{
      this._handleLike()
    })

    this._item.querySelector('.photo-cards__bucket').addEventListener('click', () => {
      this._handleDelete()
    })

    this._item.querySelector('.photo-cards__img').addEventListener('click', () => {
      openImgPopup(this._name, this._link)
    })
  }

  generateCard(){
    this._item = this._getTemplate()

    this._item.querySelector('.photo-cards__title').textContent = this._name
    this._item.querySelector('.photo-cards__img').alt = this._name
    this._item.querySelector('.photo-cards__img').src = this._link

    this._setEventListeners()
    console.log(this._name)
    return this._item
  }

}
