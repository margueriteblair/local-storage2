// - Deal two cards to each player (show player 1 their cards and their card total.
//     - ask the player 1 if they would like another card, or allow player 1 to request another card.
//     - if player 1 requests a new card, the new card is displayed and a new total is generated
//     - if player 1 takes a new card and player 1 total > 21. Player 1 loses.
//     - once player 1 stands, the computer will decide how many new cards to take.
//     - the computer will decide to take a new card if the player 1 has a greater total that is less than 21.

let cards = {
    deck: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    
    player1Cards: [],
    player1CardsTotal: 0,

    dealerCards: [],
    dealerCardsTotal: 0
}

let cardMethods = {
    initialDeal: function() {
        for (let i = 0; i < 2; i++) {
            cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random()*cards.deck.length), 1).pop());
            // console.log(cards.player1Cards);
        }
        let html = "<ul>"
        for (let i = 0; i < cards.player1Cards.length; i++) {
            html += `<li>${cards.player1Cards[i]}</li>`
        
        }
            html = html + `</ul>`
            document.getElementById("player1cards").innerHTML = html;

    },

    totalPlayer1Cards: function() {
        for (let i = 0; i < cards.player1Cards.length; i++) {
            cards.player1CardsTotal += cards.player1Cards[i]
    }
},
    hitMe: function() {
        cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random()*cards.deck.length), 1).pop());
        console.log(cards.player1Cards)
        let html = "<ul>"
        for (let i = 0; i < cards.player1Cards.length; i++) {
            html += `<li>${cards.player1Cards[i]}</li>`
        
        }
            html = html + `</ul>`
            document.getElementById("player1cards").innerHTML = html;
            cardMethods.totalPlayer1Cards();
    },
    stand: function() {
        
    },
    initialDealerDeal: function() {
        for (let i = 0; i < 2; i++) {
            cards.dealer.push((cards.deck.splice(Math.random()*cards.deck.length),1).pop())
        }
    }
}
document.getElementById("title").innerText = "The House Always Wins, but go ahead"
cardMethods.initialDeal();
cardMethods.totalPlayer1Cards();
document.getElementById("player1cardsTotal").innerText = cards.player1CardsTotal;
document.getElementById("player1Name").innerText = prompt("What is your name?");
cardMethods.totalPlayer1Cards();
