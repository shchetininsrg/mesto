import Card from '../components/Card'
import FormValidator from '../components/FormValidator'
import Section from '../components/Section'
import PopupWithImage from '../components/PopupWithImage'
import PopupWithForm from '../components/PopupWithForm'
import UserInfo from '../components/UserInfo'
import './index.css';
import {editProfile, popupEdit, addPopup, popupInputFullname, popupInputDescription, profileAddBtn, initialCards} from '../utils/сonstants'
import {configApi} from '../utils/configApi'
import Api from '../components/Api'

const api = new Api(configApi)


const createCard = (item, selector, func) => { 
  const card = new Card(item, selector, func) 
    const cardElement = card.generateCard()
    return cardElement 
} 
  

const section = new Section(
    (item) => {
      const card = createCard(item, '#cards_template', handleCardClick)
      section.addItemDefault(card)
     },
  ".photo-cards");

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

const userInfo = new UserInfo({selectorName:'.profile-info__fullname', selectorJob:'.profile-info__description', selectorAvatar: '.profile__avatar'})

Promise.all([api.getUserInfo(), api.getDefaultCard()])
.then(([dataUser, dataCard]) => {
  dataCard.forEach(item => item.myid = dataUser._id)
  userInfo.setUserInfo({name: dataUser.name, job: dataUser.about, avatar: dataUser.avatar})
  section.addItemDefault(dataCard)
  console.log(dataCard)
})




