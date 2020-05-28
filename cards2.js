let hit = document.createElement("button")
hit.id = "hit"
hit.textContent = "Hit Me"
document.body.appendChild(hit)
hit.onclick = function() {

}

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
        img: "images/2H.png"
    },
    {
        value: 3,
        img: "images/2S.png"
    },
]

let grid = document.queryCommandValue("#all-cards")

function showDeck() {
    for (let i = 0; i < cardDeck.length; i++) {
        let card = document.createElement("img")
        card.setAttribute("src", cardDeck[i].img)
        card.setAttribute("data-id", i)
        grid.appendChild(card)
    }
}

