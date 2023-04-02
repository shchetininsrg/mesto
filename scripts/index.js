let editProfile = document.querySelector('.profile-info__edit-btn')
let popup = document.querySelector('.popup')
let popupClose = document.querySelector('.popup_close-btn')

editProfile.onclick = function () {
    popup.classList.add('popup_open')
}

popupClose.onclick = function () {
    popup.classList.remove('popup_open')
}