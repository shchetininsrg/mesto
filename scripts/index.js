let editProfile = document.querySelector('.profile-info__edit-btn')
let popupEdit = document.querySelector('#editPopup')
let addPopup = document.querySelector('#addPopup')
let imgPopup = document.querySelector('#imgPopup')
let popupClose = document.querySelector('.popup__close-btn')
let closeAdd = document.querySelector('#closeAdd')
let closeImg = document.querySelector('#closeImg')
let profileInfoFullname = document.querySelector('.profile-info__fullname')
let profileInfoDescription = document.querySelector('.profile-info__description')
let popupInputFullname = document.querySelector('#inputFullname')
let popupInputDescription = document.querySelector('#inputJob')
let formElement = document.querySelector('.popup__form')
let profileAddBtn = document.querySelector('.profile__add-btn')
let cardsTemplate = document.querySelector('#cards_template')
let photoCards = document.querySelector('.photo-cards')
let formAdd = document.querySelector('.popup__form_add')
let inputName = document.querySelector('.popup__input_name')
let inputLink = document.querySelector('.popup__input_link')
let popupImg = document.querySelector('.popup__img')
let popupText = document.querySelector('.popup__text')



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

closeImg.addEventListener('click', function (){
  closePopup(imgPopup)
});


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileInfoFullname.textContent = popupInputFullname.value
    profileInfoDescription.textContent = popupInputDescription.value 
    closePopup(popupEdit)

}


// работа с карточками
let createCard = (cardData) => {
  let cardElement = cardsTemplate.content.querySelector('.photo-cards__item').cloneNode(true)
  let cardName = cardElement.querySelector('.photo-cards__title')
  let cardImg = cardElement.querySelector('.photo-cards__img')

  cardName.innerHTML = cardData.name;
  cardImg.src = cardData.link;
  cardImg.alt = cardData.name;

  cardImg.addEventListener('click', () => {
    openPopup(imgPopup)

    popupImg.src = cardImg.src
    popupText.innerHTML = cardName.textContent

  })

  let cardLikes = cardElement.querySelector('.photo-cards__like')
  const handleLike = () => {
    cardLikes.classList.toggle('photo-cards__like_active')
  }
  let cardDelete = cardElement.querySelector('.photo-cards__bucket')
  const handleDelete = () => {
    cardElement.remove()
  }
  cardLikes.addEventListener('click', handleLike)
  cardDelete.addEventListener('click', handleDelete)
  return cardElement
}

let renderCard = (cardElement) => {
 photoCards.prepend(cardElement)
}

initialCards.forEach((card) => {
  renderCard(createCard(card))
})

function addCards() {

}


let handleAddCard = (evt) => {
  evt.preventDefault()
  let name = inputName.value
  let link = inputLink.value

  let cardObj = {
    name: name,
    link: link
  }

  renderCard(createCard(cardObj))
  closePopup(addPopup)
}



formAdd.addEventListener('submit', handleAddCard)
formElement.addEventListener('submit', handleFormSubmit); 