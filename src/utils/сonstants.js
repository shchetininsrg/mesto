export const editProfile = document.querySelector('.profile-info__edit-btn')
export const popupEdit = document.querySelector('#editPopup')
export const addPopup = document.querySelector('#addPopup')
export const avatarPopup = document.querySelector('#editAvatarPopup')
export const popupInputFullname = popupEdit.querySelector('#inputFullname')
export const popupInputDescription = popupEdit.querySelector('#inputJob')
export const profileAddBtn = document.querySelector('.profile__add-btn')
export const avatarEdit = document.querySelector('.profile__avatar-container')

  export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_error',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error'
  };