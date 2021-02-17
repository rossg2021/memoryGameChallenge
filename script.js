document.addEventListener('DomContentLoaded', () => {

  //card choices 
const cardArray = [
  {
    name: 'bird',
  img: 'images/bird.png'
},

{
  name: 'bird',
img: 'images/bird.png'
},

{
  name: 'shoe',
  img: 'images/shoe.png'
},

{
  name: 'shoe',
  img: 'images/shoe.png'
},

{
  name: 'carrot',
  img: 'image/carrot.png'
},

{
  name: 'carrot',
  img: 'image/carrot.png'
},

{
  name: 'meat',
  img: 'image/meat.png'
},

{
  name: 'meat',
  img: 'image/meat.png'
},

{
  name: 'fork',
  img: 'image/fork.png'
},

{
  name: 'fork',
  img: 'image/fork.png'
}
]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//gameboard 

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click',flipCard)
  
    grid.appendChild(card)
  }
}

//match check 
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const firstOptionId = cardsChosenId[0]
  const secondOptionId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('Match Found!')
    cards[firstOptionId].setAttribute('src', 'images/blank.png')
    cards[secondOptionId].setAttribute('src', 'images/blank.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[firstOptionId].setAttribute('src', 'images/black.jpg')
    cards[secondOptionId].setAttribute('src', 'images/black.jpg')
    alert('Try Again!')
  }
  cardsChosen = []
  cardsChosenId = []
    resultsDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultsDisplay.textContent = "You Win"
    }
  
}


//flip card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
  }

}