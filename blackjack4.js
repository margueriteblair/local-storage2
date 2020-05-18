let cards = {
    cardDeckValues: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    player1CardTotals: 0,
    dealerCards: [],
    dealerCardsTotals: 0
}

let cardMethods = {
    newGame: function() {
        cards.player1Cards = []
        for (let i = 0; i < 2; i++) {
            cards.player1Cards.push(cards.cardDeckValues.splice(Math.floor(Math.random()*cards.cardDeckValues.length),1).pop())
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
        for (let i = 0; i < cards.player1Cards.length; i++) {
          cards.player1CardTotals += cards.player1Cards[i];
        }
        document.getElementById('player1CardsTotal').innerText = cards.player1CardTotals
        if (cards.player1CardsTotal > 21) {
            alert(`Busted! You lose.`)
        } 
      },
      hitMe: function() {
        cards.player1Cards.push(cards.cardDeckValues.splice(Math.floor(Math.random()*cards.cardDeckValues.length),1).pop())
        this.updatePlayerCards();
        this.totalCardsPlayer1();
      },
      stand: function() {
          this.dealerPlayerLogic()
      },
      dealerPlayerLogic: function() {
        this.initialDealerCards();
      },
      initialDealerCards: function() {
        for (let i = 0; i < 2; i++) {
            cards.dealerCards.push(cards.cardDeckValues.splice(Math.floor(Math.random()*cards.cardDeckValues.length),1).pop())
        }
      },
}