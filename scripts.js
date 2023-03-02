// 🧱 Query selectors 🧱
var userInputName = document.querySelector("#name");
var userInputEmail = document.querySelector("#email");
var addContactBtn = document.querySelector("#register-btn");
var displayBtn = document.querySelector("#display-btn")
var displayArea = document.querySelector(".display-area")

// 👂🏼 Event listeners 👂🏼
addContactBtn.addEventListener("click", addContact);
displayBtn.addEventListener("click", displayContacts)
displayArea.addEventListener("click", deleteCard)
displayArea.addEventListener("click", updateFavorite)

// 🌎 Global Variables 🌎
let cardsArray = [];

// 🚧 Functions 🚧
function addContact() {
    let newContact = {
        name: userInputName.value,
        email: userInputEmail.value,
        id: Date.now()
    }
    if (localStorage.getItem('storedContacts')) {
        let old_data = JSON.parse(localStorage.getItem('storedContacts'));
        old_data.push(newContact)
        localStorage.setItem('storedContacts', JSON.stringify(old_data))
        alert("Your new contact has been added to the list!")
    } else {
        cardsArray.push(newContact)
        localStorage.setItem('storedContacts', JSON.stringify(cardsArray))
        alert("Your new contact has been added to the list!")
    }
    clearInputs()
}

function displayContacts() {
    let storedContacts = JSON.parse(localStorage.getItem('storedContacts'))
    displayArea.innerHTML = '';
    const displayThem = storedContacts.map((contact) => {
        displayArea.innerHTML += `
        <article class="display-card" id=${contact.id}>
            <div class="top-bar">
                <img class="fav-btn" src="assets/unfavorite.svg" alt="favorite icon" />
                <img class="delete-btn" src="assets/delete.svg" alt="delete icon"/>
            </div>
            <div class="bottomCard">
                <h2>Name: ${contact.name}</h2>
                <h3>Email: ${contact.email}</h3>
            </div>
        </article>
        `
    })
return displayThem
}

function deleteCard(event) {
    if (event.target.classList.contains("delete-btn")) {
      let chosenCard = event.target.closest(".display-card")
      let cardId = chosenCard.getAttribute('id')
      chosenCard.remove()
        let old_data = JSON.parse(localStorage.getItem('storedContacts'));

        let filterArray = old_data.filter((contact) => {
            return contact.id != cardId
        })
        localStorage.setItem('storedContacts', JSON.stringify(filterArray))
    }
  }

function updateFavorite(event) {
    if (event.target.classList.contains("fav-btn")) {
        if (event.target.getAttribute('src') === 'assets/unfavorite.svg') {
            event.target.src = "assets/favorite.svg";
            event.target.closest(".fav-btn").classList.add("favorite")
        } else if (event.target.getAttribute('src') === "assets/favorite.svg") {
            event.target.src = "assets/unfavorite.svg";
            event.target.closest('.fav-btn').classList.remove("favorite")
        }
    }
}

function clearInputs() {
    userInputName.value = '';
    userInputEmail.value = '';
}