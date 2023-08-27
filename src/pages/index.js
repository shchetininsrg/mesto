import Card from '../components/Card'
import FormValidator from '../components/FormValidator'
import Section from '../components/Section'
import PopupWithImage from '../components/PopupWithImage'
import PopupWithForm from '../components/PopupWithForm'
import UserInfo from '../components/UserInfo'
import './index.css';
import {editProfile, popupEdit, addPopup, popupInputFullname, popupInputDescription, profileAddBtn, avatarEdit, avatarPopup, config} from '../utils/сonstants'
import {configApi} from '../utils/configApi'
import Api from '../components/Api'
import PopupWithConfirm from '../components/PopupWithConfirm'
const api = new Api(configApi)

const popupWithConfirm = new PopupWithConfirm('#confirmPopup', (item, cardId) => {
  api.deleteCard(cardId)
  .then( () => {
    item.deleteCard()
    popupWithConfirm.close()
  })
  .catch((error) => console.log(`Ошибка при удалении ${error}`))
})
popupWithConfirm.setEventListener()


const createCard = (item) => { 
  const card = new Card(item, '#cards_template', handleCardClick, popupWithConfirm.open, (likeElement, cardId) => {
    if (likeElement.classList.contains('photo-cards__like_active')) {
      api.deleteLike(cardId)
      .then(res => {
        card.toggleLike(res.likes)
      })
      .catch((error) => console.log(`Ошибка при дизлайке ${error}`))
    } else {
      api.addLike(cardId)
      .then(res => {
        card.toggleLike(res.likes)
      })
      .catch((error) => console.log(`Ошибка при лайке ${error}`))
    }
  });
    return card.generateCard()
} 

const section = new Section(
    {renderer: (item) => {
      const card = createCard(item)
      section.addItem(card)
     }},
  ".photo-cards");

const handleProfileFormSubmit = (data) => {
  api.setInfoUser(data)
  .then(res => {
    userInfo.setUserInfo({name: res.name, job: res.about, avatar: res.avatar})
    popupEditProfile.close()
  })
  .catch((error) => console.log(`Ошибка при обновлении профиля ${error}`))
  .finally(() => {
    popupEditProfile.setLoadingText()
  })
}

const handleAddCard = (data) => {
  Promise.all([api.getUserInfo(), api.createNewCard(data)])
  .then(([dataUser, dataCard]) => {
    dataCard.myid = dataUser._id
    const card = createCard(dataCard)
    section.addItem(card)
    popupAddCard.close()
  })
  .catch((error) => console.log(`Ошибка при добавлении карточки ${error}`))
  .finally(() => {
    popupAddCard.setLoadingText()
  })
}

const handleEditAvatar = (data) => {
  api.setAvatar(data)
  .then(res => {
    userInfo.setUserInfo({name: res.name, job: res.about, avatar: res.avatar})
    popupAvatarEdit.close()
  })
  .catch((error) => console.log(`Ошибка при обновлении аватара ${error}`))
  .finally(() => {
    popupAvatarEdit.setLoadingText()
  })
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
};

avatarEdit.addEventListener('click', () => {
  popupAvatarEdit.open()
  editAvatarFormValidator.verifyBtn()
})

const addCardFormValidator = new FormValidator(config, addPopup);
const editProfileFormValidator = new FormValidator(config, popupEdit);
const editAvatarFormValidator = new FormValidator(config, avatarPopup)
editAvatarFormValidator.enableValidation()
addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()

const popupWithImage = new PopupWithImage('#imgPopup')
popupWithImage.setEventListener()

const popupEditProfile = new PopupWithForm('#editPopup', handleProfileFormSubmit)
popupEditProfile.setEventListener()

const popupAvatarEdit = new PopupWithForm('#editAvatarPopup', handleEditAvatar)
popupAvatarEdit.setEventListener()

const popupAddCard = new PopupWithForm('#addPopup', handleAddCard)
popupAddCard.setEventListener()

const userInfo = new UserInfo({selectorName:'.profile-info__fullname', selectorJob:'.profile-info__description', selectorAvatar: '.profile__avatar'})

Promise.all([api.getUserInfo(), api.getDefaultCard()])
.then(([dataUser, dataCard]) => {
  dataCard.forEach(item => item.myid = dataUser._id)
  userInfo.setUserInfo({name: dataUser.name, job: dataUser.about, avatar: dataUser.avatar})
  section.addItemDefault(dataCard.reverse())
})




