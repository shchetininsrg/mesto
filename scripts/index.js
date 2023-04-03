let editProfile = document.querySelector('.profile-info__edit-btn')
let popup = document.querySelector('.popup')
let popupClose = document.querySelector('.popup__close-btn')
let profileInfoFullname = document.querySelector('.profile-info__fullname')
let profileInfoDescription = document.querySelector('.profile-info__description')
let popupInputFullname = document.querySelector('#inputFullname')
let popupInputDescription = document.querySelector('#inputJob')
let formElement = document.querySelector('.popup__form')

popupInputFullname.value = profileInfoFullname.innerHTML
popupInputDescription.value = profileInfoDescription.innerHTML

editProfile.onclick = function () {
    popup.classList.add('popup_open')
}

popupClose.onclick = function () {
    popup.classList.remove('popup_open')
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileInfoFullname.textContent = popupInputFullname.value
    profileInfoDescription.textContent = popupInputDescription.value 
    popup.classList.remove('popup_open')

}

formElement.addEventListener('submit', handleFormSubmit); 