let cards = {
    suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
    cardDeckValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    fullDeck: []
}

for (let i = 0; i < cards.suits.length; i++) {
    for (let j = 0; j < cards.cardDeckValues.length; j++) {
        cards.fullDeck.push((`${cards.suits[i]} ${cards.cardDeckValues[j]}`))
    }
}
console.log(cards.fullDeck)