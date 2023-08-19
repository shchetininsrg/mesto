import Card from '../components/Card'
import FormValidator from '../components/FormValidator'
import Section from '../components/Section'
import PopupWithImage from '../components/PopupWithImage'
import PopupWithForm from '../components/PopupWithForm'
import UserInfo from '../components/UserInfo'
import './index.css';
const editProfile = document.querySelector('.profile-info__edit-btn')
const popupEdit = document.querySelector('#editPopup')
const addPopup = document.querySelector('#addPopup')
const popupInputFullname = popupEdit.querySelector('#inputFullname')
const popupInputDescription = popupEdit.querySelector('#inputJob')
const profileAddBtn = document.querySelector('.profile__add-btn')
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
    editProfileFormValidator.verifyBtn()
});

profileAddBtn.addEventListener('click', () => {
    popupAddCard.open()
    addCardFormValidator.verifyBtn()
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




