let cards = {
    suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
    cardDeckValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    fullDeck: [],
    player1Cards: [],
    player1CardTotals: 0,
    dealerCards: [],
    dealerCardsTotals: 0
}

let cardMethods = {
    newGame: function() {
        for (let i = 0; i < cards.suits.length; i++) {
            for (let j = 0; j < cards.cardDeckValues.length; j++) {
                cards.fullDeck.push((`${cards.cardDeckValues[j]} ${cards.suits[i]}`))
            }
        }
        for (let i = 0; i < 2; i++) {
            cards.player1Cards.push(cards.fullDeck.splice(Math.floor(Math.random()*cards.fullDeck.length),1).pop())
        }
        this.updatePlayerCards();
    },
    updatePlayerCards: function() {
        let html = "<ul>"
        for (let i = 0; i < cards.player1Cards.length; i++) {
            html = html + `<li>${cards.player1Cards[i]}</li>`
        }
            html = html + "</ul>"
            document.getElementById("player1Cards").innerHTML = html;
            this.totalCardsPlayer1();
    },
    totalCardsPlayer1: function() {
        cards.player1CardTotals = 0;
        for (let i = 0; i < player1Cards.length; i++) {
            cards.player1CardsTotal += parseInt(cards.player1Cards[i][0])
            console.log(cards.player1CardsTotal)
        }
        document.getElementById("player1CardsTotal").innerText = cards.player1CardTotals
    },
    hitMe: function() {
        cards.player1Cards.push(cards.fullDeck.splice(Math.floor(Math.random()*cards.fullDeck.length),1).pop())
        this.updatePlayerCards();
        this.totalCardsPlayer1();
    },
    stand: function() {
        this.dealerPlayerLogic();
    },
    dealerPlayerLogic: function() {
        for (let i = 0; i < 2; i++) {
            cards.dealerCards.push(cards.fullDeck.splice(Math.floor(Math.random()*cards.fullDeck.length), 1).pop())
        }
        let html = "<ul>"
        for (let i = 0; i < cards.dealerCards.length; i++) {
            html = html + `<li>${cards.dealerCards[i]}</li>`
        }
            html = html + "</ul>"
            document.getElementById("dealerCards").innerHTML = html;
            this.totalDealerCards()
    },
    totalDealerCards: function() {
        cards.dealerCardsTotals = 0;
        for (let i = 0; i < cards.dealerCards.length; i++) {
            cards.dealerCardsTotal = cards.dealerCardsTotal + parseInt(cards.dealerCards[i][0])
        }
        document.getElementById("dealerCardsTotal").innerText = cards.dealerCardsTotal;
    }
}

console.log(cards.fullDeck)