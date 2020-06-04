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

let player1Cards = [];
let player1CardTotals = 0;
let dealerCards = [];
let dealerCardTotals = 0;


function initialDeal() {
    let i = 0;
    while (i < 2) {
        player1Cards.push(cardDeck[i].value)
        let faceCards = document.createElement("img")
        faceCards.class = "cards"
        faceCards.setAttribute("src", cardDeck[i].img)
        document.getElementById("player1Cards").appendChild(faceCards);
        i++;
    }
    for (let i = 0; i < 2; i++) {
        cardDeck.splice((cardDeck[i]),1)
    }
    totalPlayer1Cards()

}

function hitMe() {
    for (let i = 0; i < 1; i++) {
        player1Cards.push(cardDeck[i].value)
        let faceCards = document.createElement('img')
        faceCards.class = "cards"
        faceCards.setAttribute("src", cardDeck[i].img)
        document.getElementById("player1Cards").appendChild(faceCards);
        cardDeck.splice((cardDeck[i]),1)
    }
    totalPlayer1Cards();
}

function totalPlayer1Cards() {
    let player1CardTotals = 0;
    for (let i = 0; i < player1Cards.length; i++) {
        player1CardTotals += player1Cards[i]
    }
    document.getElementById("player1Total").innerText = player1CardTotals;
    if (player1CardTotals > 21) {
        setTimeout(function(){
            alert(`Busted! You lose.`)
        }, 500)
    }
}

function stand() {
    initialDealerDeal()
        setTimeout(function(){
            if (parseInt(document.getElementById("dealerTotal").innerText) < parseInt(document.getElementById("player1Total").innerText)) {
            dealerLogic();
            totalDealerCards();
            console.log(parseInt(document.getElementById("dealerTotal").innerText))
        }
        }, 1000)
        setTimeout(function(){
            if (parseInt(document.getElementById("dealerTotal").innerText) < parseInt(document.getElementById("player1Total").innerText)) {
            dealerLogic();
            totalDealerCards();
            console.log(parseInt(document.getElementById("dealerTotal").innerText))
        }
        }, 2000)
        setTimeout(function(){
            if (parseInt(document.getElementById("dealerTotal").innerText) < parseInt(document.getElementById("player1Total").innerText)) {
            dealerLogic();
            totalDealerCards();
            console.log(parseInt(document.getElementById("dealerTotal").innerText))
        }
        }, 3000)
        setTimeout(function(){
            if (parseInt(document.getElementById("dealerTotal").innerText) < parseInt(document.getElementById("player1Total").innerText)) {
            dealerLogic();
            totalDealerCards();
            console.log(parseInt(document.getElementById("dealerTotal").innerText))
        }
        }, 4000)

}

function totalDealerCards() {
    let dealerCardTotals = 0;
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardTotals += dealerCards[i];
    }
    document.getElementById("dealerTotal").innerText = dealerCardTotals;
    if (player1CardTotals > dealerCardTotals && player1CardTotals <= 21) {
        setTimeout(function(){
            alert(`You win! Congratulations`)
        },500)
    } else if (dealerCardTotals > 21 && player1CardTotals <=21) {
        setTimeout(function(){
            alert(`You win! Congratulations`)
        }, 500)
    } else if (dealerCardTotals === 21 && player1CardTotals === 21){
        setTimeout(function(){
            alert(`There has been a tie.`)
        })
    } else if (dealerCardTotals === 21 && player1CardTotals !== 21) {
        setTimeout(function(){
            alert(`You lose!`)
        })
    }
}

function initialDealerDeal(){
    for (let i = 0; i < 2; i++) {
        dealerCards.push(cardDeck[i].value)
        let faceCards = document.createElement("img");
        faceCards.class = "cards"
        faceCards.setAttribute("src", cardDeck[i].img)
        document.getElementById("dealerCards").appendChild(faceCards);
        cardDeck.splice((cardDeck[i]),1)
        totalDealerCards();
    }
}   

function dealerLogic() {
    if (parseInt(document.getElementById("dealerTotal").innerText) > parseInt(document.getElementById("player1Total").innerText) && parseInt(document.getElementById("dealerTotal").innerText) <= 21) {
        setTimeout(function(){
            alert('You lose! Dealer is closer to 21.')
        },1000)
        totalDealerCards();
    } else if (parseInt(document.getElementById("dealerTotal").innerText) < 21 && (parseInt(document.getElementById("dealerTotal").innerText) <= parseInt(document.getElementById("player1Total").innerText))) {
        setTimeout(function(){
            dealerCards.push(cardDeck[0].value)
            let faceCards = document.createElement("img");
            faceCards.class = "cards"
            faceCards.setAttribute("src", cardDeck[0].img)
            document.getElementById("dealerCards").appendChild(faceCards);
            totalDealerCards()
    }, 1000) 
    cardDeck.splice(cardDeck[0], 1)
    } 
}



