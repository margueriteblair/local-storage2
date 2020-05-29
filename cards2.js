const cardDeck = [
    {
        value: 2,
        img: "images/2C.png"
    },
    {
        value: 2,
        img: "images/2D.png"
    },
    {
        value: 2,
        img: "images/2H.png"
    },
    {
        value: 2,
        img: "images/2S.png"
    },
    {
        value: 3,
        img: "images/3C.png"
    },
    {
        value: 3,
        img: "images/3D.png"
    },
    {
        value: 3,
        img: "images/3H.png"
    },
    {
        value: 3,
        img: "images/3S.png"
    },
    {
        value: 4,
        img: "images/4C.png"
    },
    {
        value: 4,
        img: "images/4D.png"
    },
    {
        value: 4,
        img: "images/4H.png"
    },
    {
        value: 4,
        img: "images/4S.png"
    },
    {
        value: 5,
        img: "images/5C.png"
    },
    {
        value: 5,
        img: "images/5D.png"
    },
    {
        value: 5,
        img: "images/5H.png"
    },
    {
        value: 5,
        img: "images/5S.png"
    },
    {
        value: 6,
        img: "images/6C.png"
    },
    {
        value: 6,
        img: "images/6D.png"
    },
    {
        value: 6,
        img: "images/6H.png"
    },
    {
        value: 6,
        img: "images/6S.png"
    },
    {
        value: 7,
        img: "images/7C.png"
    },
    {
        value: 7,
        img: "images/7D.png"
    },
    {
        value: 7,
        img: "images/7H.png"
    },
    {
        value: 7,
        img: "images/7S.png"
    },
    {
        value: 8,
        img: "images/8C.png"
    },
    {
        value: 8,
        img: "images/8D.png"
    },
    {
        value: 8,
        img: "images/8H.png"
    },
    {
        value: 8,
        img: "images/8S.png"
    },
    {
        value: 9,
        img: "images/9C.png"
    },
    {
        value: 9,
        img: "images/9D.png"
    },
    {
        value: 9,
        img: "images/9H.png"
    },
    {
        value: 9,
        img: "images/9S.png"
    },
    {
        value: 10,
        img: "images/10C.png"
    },
    {
        value: 10,
        img: "images/10D.png"
    },
    {
        value: 10,
        img: "images/10H.png"
    },
    {
        value: 10,
        img: "images/10S.png"
    },
]
cardDeck.sort(() => .5 - Math.random())

let hit = document.createElement("button")
hit.id = "hit"
hit.textContent = "Hit Me"
document.body.appendChild(hit)
hit.onclick = function() {

}
let grid = document.querySelector("#all-cards")
let player1Cards = [];
let player1CardTotals = 0;

function showDeck() {
    for (let i = 0; i < cardDeck.length; i++) {
        let card = document.createElement("img")
        card.setAttribute("src", "images/red_back.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        grid.appendChild(card)
    }
}

function flipcard(){
    let cardId = this.getAttribute("data-id")
    player1Cards.push(cardDeck[cardId].value)
    this.setAttribute("src", cardDeck[cardId].img)
    

}


// initialDeal()




