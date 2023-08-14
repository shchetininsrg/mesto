import Card from './Card.js'
import FormValidator from './FormValidator.js'
import Section from './Section.js'
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
const photoCards = document.querySelector('.photo-cards')
const formAddCard = addPopup.querySelector('.popup__form')
const popupInputCardName = addPopup.querySelector('.popup__input_name')
const popupInputCardLink = addPopup.querySelector('.popup__input_link')
const popupImgPicture = imgPopup.querySelector('.popup__img')
const popupImgText = imgPopup.querySelector('.popup__text')
const popups = document.querySelectorAll('.popup')
const inputArray = Array.from(formEditProfile.querySelectorAll('.popup__input'));
const buttonElement = addPopup.querySelector('.popup__save-btn')

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
    addCardFormValidator.verifyBtn(inputArray, buttonElement)
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
    evt.target.reset()
}


const section = new Section(
  {
   item: initialCards,
   renderer: (item) => {
    const card = new Card(item, '#cards_template')
    const cardElement = card.generateCard()
    return cardElement
   },
  },
".photo-cards"
);

section.renderer();

const createCard = (item) => { 
  const card = new Card(item, '#cards_template') 
    const cardElement = card.generateCard() 
    return cardElement 
} 


export const openImgPopup = (name, img) => {
    openPopup(imgPopup)

    popupImgPicture.src = img
    popupImgText.textContent = name
    popupImgPicture.alt = name
  }

const handleAddCard = (evt) => {
  evt.preventDefault()
  const name = popupInputCardName.value
  const link = popupInputCardLink.value

  const cardObj = {
    name: name,
    link: link
  }
  photoCards.prepend(createCard(cardObj))
  closePopup(addPopup)
  evt.target.reset()
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

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_error',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error'
  };

const addCardFormValidator = new FormValidator(config, addPopup);
const editProfileFormValidator = new FormValidator(config, popupEdit);
addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()




