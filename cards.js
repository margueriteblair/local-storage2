let header = document.createElement("h1")
header.innerText = "Blackjack Game"
header.id = "header"
document.body.appendChild(header)

let newGameBtn = document.createElement("button")
newGameBtn.innerText = "New Game"
newGameBtn.id = "newGame"
document.body.appendChild(newGameBtn)
// newGameBtn.onclick = cardMethods.initialDeal()

let hitMeBtn = document.createElement("button")
hitMeBtn.innerText = "Hit"
document.body.appendChild(hitMeBtn)

let standBtn = document.createElement("button")
standBtn.innerText = "Stand"
document.body.appendChild(standBtn)

let player1Div = document.createElement("div")
player1Div.innerText = "Player 1:"
player1Div.id="player1Cards"
document.body.appendChild(player1Div)

let dealerDiv = document.createElement("div")
dealerDiv.innerText = "Dealer:"
dealerDiv.id="dealerCards"
document.body.appendChild(dealerDiv)

let dealerTotalCards = document.createElement("div")
dealerTotalCards.id="dealerTotalCards"
document.body.appendChild(dealerTotalCards)

let cards = {
    cardDeckValues: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    player1CardTotals: 0,
    dealerCards: [],
    dealerCardsTotals: 0
}

let cardMethods = {
    initialDeal: function() {
        for (let i = 0; i < 2; i++) {
            cards.player1Cards.push(cardDeckValues.splice(Math.floor(Math.random()*cards.cardDeckValues.length), 1).pop())
        }
    }
}

