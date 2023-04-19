const editProfile = document.querySelector('.profile-info__edit-btn')
const popupEdit = document.querySelector('#editPopup')
const addPopup = document.querySelector('#addPopup')
const imgPopup = document.querySelector('#imgPopup')
const popupClose = popupEdit.querySelector('.popup__close-btn')
const closeAdd = addPopup.querySelector('.popup__close-btn')
const closeImg = imgPopup.querySelector('.popup__close-btn')
const profileInfoFullname = document.querySelector('.profile-info__fullname')
const profileInfoDescription = document.querySelector('.profile-info__description')
const popupInputFullname = document.querySelector('#inputFullname')
const popupInputDescription = document.querySelector('#inputJob')
const formElement = popupEdit.querySelector('.popup__form')
const profileAddBtn = document.querySelector('.profile__add-btn')
const cardsTemplate = document.querySelector('#cards_template')
const photoCards = document.querySelector('.photo-cards')
const formAdd = document.querySelector('.popup__form_add')
const inputName = document.querySelector('.popup__input_name')
const inputLink = document.querySelector('.popup__input_link')
const popupImg = document.querySelector('.popup__img')
const popupText = document.querySelector('.popup__text')

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//Попапы
function openPopup(popupElement) {
  popupElement.classList.add('popup_open')
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_open')
}

editProfile.addEventListener('click', function(){
    openPopup(popupEdit)
    popupInputFullname.value = profileInfoFullname.textContent
    popupInputDescription.value = profileInfoDescription.textContent
});

popupClose.addEventListener('click', function (){
    closePopup(popupEdit)
});

profileAddBtn.addEventListener('click', function (){
    openPopup(addPopup)
});

closeAdd.addEventListener('click', function (){
    closePopup(addPopup)
});

closeImg.addEventListener('click', function (){
  closePopup(imgPopup)
});

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileInfoFullname.textContent = popupInputFullname.value
    profileInfoDescription.textContent = popupInputDescription.value
    closePopup(popupEdit)
}

// работа с карточками
const createCard = (cardData) => {
  const cardElement = cardsTemplate.content.querySelector('.photo-cards__item').cloneNode(true)
  const cardName = cardElement.querySelector('.photo-cards__title')
  const cardImg = cardElement.querySelector('.photo-cards__img')

  cardName.textContent = cardData.name;
  cardImg.src = cardData.link;
  cardImg.alt = cardData.name;

  cardImg.addEventListener('click', () => {
    openPopup(imgPopup)

    popupImg.src = cardImg.src
    popupText.textContent = cardName.textContent

  })

  const cardLikes = cardElement.querySelector('.photo-cards__like')
  const handleLike = () => {
    cardLikes.classList.toggle('photo-cards__like_active')
  }
  const cardDelete = cardElement.querySelector('.photo-cards__bucket')
  const handleDelete = () => {
    cardElement.remove()
  }
  cardLikes.addEventListener('click', handleLike)
  cardDelete.addEventListener('click', handleDelete)
  return cardElement
}

const renderCard = (cardElement) => {
 photoCards.append(cardElement)
}

const renderNewCard = (cardElement) => {
  photoCards.prepend(cardElement)
 }

initialCards.forEach((card) => {
  renderCard(createCard(card))
})

const handleAddCard = (evt) => {
  evt.preventDefault()
  const name = inputName.value
  const link = inputLink.value

  const cardObj = {
    name: name,
    link: link
  }

  renderNewCard(createCard(cardObj))
  closePopup(addPopup)
}

formAdd.addEventListener('submit', handleAddCard)
formElement.addEventListener('submit', handleProfileFormSubmit);
