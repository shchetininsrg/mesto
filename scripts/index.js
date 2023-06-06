import Card from './Card.js'
const editProfile = document.querySelector('.profile-info__edit-btn')
const popupEdit = document.querySelector('#editPopup')
const addPopup = document.querySelector('#addPopup')
const imgPopup = document.querySelector('#imgPopup')
const popupEditProfileBtn = popupEdit.querySelector('.popup__close-btn')
const closeAdd = addPopup.querySelector('.popup__close-btn')
const closeImg = imgPopup.querySelector('.popup__close-btn')
const profileInfoFullname = document.querySelector('.profile-info__fullname')
const profileInfoDescription = document.querySelector('.profile-info__description')
const popupInputFullname = popupEdit.querySelector('#inputFullname')
const popupInputDescription = popupEdit.querySelector('#inputJob')
const formEditProfile = popupEdit.querySelector('.popup__form')
const profileAddBtn = document.querySelector('.profile__add-btn')
const cardsTemplate = document.querySelector('#cards_template')
const photoCards = document.querySelector('.photo-cards')
const formAddCard = addPopup.querySelector('.popup__form')
const popupInputCardName = addPopup.querySelector('.popup__input_name')
const popupInputCardLink = addPopup.querySelector('.popup__input_link')
const popupImgPicture = imgPopup.querySelector('.popup__img')
const popupImgText = imgPopup.querySelector('.popup__text')
const popups = document.querySelectorAll('.popup')

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
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_open')
  document.addEventListener('keydown', closeEscPopup)
}

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_open')
  document.removeEventListener('keydown', closeEscPopup)
}

editProfile.addEventListener('click', () => {
    openPopup(popupEdit)
    popupInputFullname.value = profileInfoFullname.textContent
    popupInputDescription.value = profileInfoDescription.textContent
});

popupEditProfileBtn.addEventListener('click', () => {
    closePopup(popupEdit)
});

profileAddBtn.addEventListener('click', () => {
    openPopup(addPopup)
});

closeAdd.addEventListener('click', () => {
    closePopup(addPopup)
});

closeImg.addEventListener('click', () => {
  closePopup(imgPopup)
});

const handleProfileFormSubmit = (evt) => {
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

    popupImgPicture.src = cardImg.src
    popupImgText.textContent = cardName.textContent
    popupImgPicture.alt = cardName.textContent

  })

  const cardLikes = cardElement.querySelector('.photo-cards__like')
  const handleLike = () => {
    cardLikes.classList.toggle('photo-cards__like_active')
  }
  const cardDelete = cardElement.querySelector('.photo-cards__bucket')
  const handleDelete = () => {
    cardElement.remove()
  }
  cardLikes.addEventListener('click', () => {
    handleLike()
  })
  cardDelete.addEventListener('click', () => {
    handleDelete()
  })
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
  const name = popupInputCardName.value
  const link = popupInputCardLink.value

  const cardObj = {
    name: name,
    link: link
  }

  renderNewCard(createCard(cardObj))
  closePopup(addPopup)
}

formAddCard.addEventListener('submit', handleAddCard)
formEditProfile.addEventListener('submit', handleProfileFormSubmit);

popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(item);
    }
  });
});

const closeEscPopup = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_open');
    closePopup(openPopup);
  }
}
