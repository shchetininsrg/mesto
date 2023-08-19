import Card from '../scripts/Card'
import FormValidator from '../scripts/FormValidator'
import Section from '../scripts/Section'
import PopupWithImage from '../scripts/PopupWithImage'
import PopupWithForm from '../scripts/PopupWithForm'
import UserInfo from '../scripts/UserInfo'
import './index.css';
const editProfile = document.querySelector('.profile-info__edit-btn')
const popupEdit = document.querySelector('#editPopup')
const addPopup = document.querySelector('#addPopup')
const popupInputFullname = popupEdit.querySelector('#inputFullname')
const popupInputDescription = popupEdit.querySelector('#inputJob')
const formEditProfile = popupEdit.querySelector('.popup__form')
const formAddCard = addPopup.querySelector('.popup__form')
const profileAddBtn = document.querySelector('.profile__add-btn')
const inputArrayEdit = Array.from(formEditProfile.querySelectorAll('.popup__input'));
const inputArrayAdd = Array.from(formAddCard.querySelectorAll('.popup__input'));
const buttonElementAdd = addPopup.querySelector('.popup__save-btn')
const buttonElementEdit = popupEdit.querySelector('.popup__save-btn')
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
const createCard = (item, selector, func) => { 
  const card = new Card(item, selector, func) 
    const cardElement = card.generateCard()
    return cardElement 
} 
  

const section = new Section(
  {
    item: initialCards,
    renderer: (item) => {
      const card = createCard(item, '#cards_template', handleCardClick)
      section.addItemDefault(card)
     },
    },
  ".photo-cards"
);

const handleProfileFormSubmit = (data) => {
  userInfo.setUserInfo(data)
}

const handleAddCard = (item) => {
  const card = createCard(item, '#cards_template', handleCardClick)
  section.addItem(card)
}

editProfile.addEventListener('click', () => {
    popupEditProfile.open()
    const {name, job} = userInfo.getUserInfo()
    popupInputFullname.value = name
    popupInputDescription.value = job
    editProfileFormValidator.verifyBtn(inputArrayEdit, buttonElementEdit)
});

profileAddBtn.addEventListener('click', () => {
    popupAddCard.open()
    addCardFormValidator.verifyBtn(inputArrayAdd, buttonElementAdd)
});

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link)
}

section.renderer();

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

const popupWithImage = new PopupWithImage('#imgPopup')
popupWithImage.setEventListener()

const popupEditProfile = new PopupWithForm('#editPopup', handleProfileFormSubmit)
popupEditProfile.setEventListener()

const popupAddCard = new PopupWithForm('#addPopup', handleAddCard)
popupAddCard.setEventListener()

const userInfo = new UserInfo({selectorName:'.profile-info__fullname', selectorJob:'.profile-info__description'})




