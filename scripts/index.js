let editProfile = document.querySelector('.profile-info__edit-btn')
let popupEdit = document.querySelector('#editPopup')
let addPopup = document.querySelector('#addPopup')
let popupClose = document.querySelector('.popup__close-btn')
let closeAdd = document.querySelector('#closeAdd')
let profileInfoFullname = document.querySelector('.profile-info__fullname')
let profileInfoDescription = document.querySelector('.profile-info__description')
let popupInputFullname = document.querySelector('#inputFullname')
let popupInputDescription = document.querySelector('#inputJob')
let formElement = document.querySelector('.popup__form')
let cardLikes = document.querySelectorAll('.photo-cards__like')
let profileAddBtn = document.querySelector('.profile__add-btn')
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

cardLikes.forEach(function(like) {
    like.addEventListener('click' , function(){
        like.classList.toggle('photo-cards__like_active')
    })
})

function openPopup(i) {
    i.classList.add('popup_open')
}

function closePopup (i) {
    i.classList.remove('popup_open')
}

editProfile.addEventListener('click', function(){
    openPopup(popupEdit)
    popupInputFullname.value = profileInfoFullname.innerHTML
    popupInputDescription.value = profileInfoDescription.innerHTML
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


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileInfoFullname.textContent = popupInputFullname.value
    profileInfoDescription.textContent = popupInputDescription.value 
    closePopup(popupEdit)

}

editProfile.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 