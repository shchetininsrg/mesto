export default class Card {
  constructor(cardData, userId, templateElement, handleCardClick, popupWithConfirm, changeLike) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._myId = cardData.myid;
    this._userId = userId;
    this._ownerId = cardData.owner._id;
    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;
    this._cardId = cardData._id;
    this._changeLike = changeLike;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
    this._popupWithConfirm =popupWithConfirm;
    this._cardTemplate = document.querySelector(this._templateElement).content.querySelector('.photo-cards__item').cloneNode(true)
    this._bucketElement = this._cardTemplate.querySelector('.photo-cards__bucket')
    this._imgElement = this._cardTemplate.querySelector('.photo-cards__img')
    this._likeElement = this._cardTemplate.querySelector('.photo-cards__like')
    this._titleElement = this._cardTemplate.querySelector('.photo-cards__title')
    this._likeCounter = this._cardTemplate.querySelector('.photo-card__like-count')
  }
  _getTemplate(){
    return this._cardTemplate;
  }

  _handleLike = () => {
    this._changeLike(this._likeElement, this._cardId);
  }

  _handleDelete = () => {
    this._popupWithConfirm(this, this._cardId)
  };

  _setEventListeners() {
    this._likeElement.addEventListener('click', this._handleLike);

    this._bucketElement.addEventListener('click', this._handleDelete);

    this._imgElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  deleteCard() {
    this._item.remove();
    this._item = null;
  }

  _changeVisibleBucket(){
    this._userId === this._ownerId ? this._bucketElement.style.display = 'block' : this._bucketElement.style.display = 'none';
  };

  _likesStatus(){
    this._likes.forEach(element => {
      if (element._id === this._userId) {
        this._likeElement.classList.add('photo-cards__like_active');
        return
      }
    })
    this._likeCounter.textContent = this._likesLength;
  };

  toggleLike(likes) {
    this._likeElement.classList.toggle('photo-cards__like_active');
    this._likeCounter.textContent = likes.length;
  };

  generateCard(){
    this._item = this._getTemplate()

    this._titleElement.textContent = this._name;
    this._imgElement.alt = this._name;
    this._imgElement.src = this._link;
    this._likeButton = this._likeElement;
    this._likesStatus();
    this._changeVisibleBucket();
    this._setEventListeners();
    return this._item
  };

}
