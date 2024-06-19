import data from "./data.json" with {type: 'json'};

function Getnum(n) {
    if (n > 10000) {
        return n.toString().slice(0, 2) + "K"
    }
    return n
}


// Control the main cards
let Acc = document.querySelectorAll(".card .head span"),
    FaceF = document.querySelectorAll(".card .body .big"),
    types = document.querySelectorAll(".card .inc img"),
    numb = document.querySelectorAll(".card .inc .num"),
    NameOfCards = ["Facebook", "Twitter", "Instagram", "Youtube"]

for (let i = 0; i < NameOfCards.length; i++) {
    Acc[i].innerHTML = data[NameOfCards[i]]["Account"]
    FaceF[i].innerHTML = Getnum(data[NameOfCards[i]]["Followers"])
    if (data[NameOfCards[i]]["type"] === "UP") {
        types[i].src = "./images/icon-up.svg"
        numb[i].classList.remove("down")
    }
    else if (data[NameOfCards[i]]["type"] === "DOWN") {
        types[i].src = "./images/icon-down.svg"
        numb[i].classList.add("down")
    }
    numb[i].innerHTML = Getnum(data[NameOfCards[i]]["number"]) + " Today"
}

// Control the overview
let Foll = document.querySelectorAll(".car .bottom .big"),
    img = document.querySelectorAll(".car .bottom .small img"),
    number = document.querySelectorAll(".car .bottom .small span"),
    Names = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

for (let i = 0; i < Names.length; i++) {
    Foll[i].innerHTML = Getnum(data["Overview"][Names[i]]["Followers"])
    if (data["Overview"][Names[i]]["type"] === "UP") {
        img[i].src = "./images/icon-up.svg"
        number[i].classList.remove("down")
    }
    else if (data["Overview"][Names[i]]["type"] === "DOWN") {
        img[i].src = "./images/icon-down.svg"
        number[i].classList.add("down")
    }
    number[i].innerHTML = Getnum(data["Overview"][Names[i]]["number"])
}

//toggle theme
let ball = document.querySelector(".ball"),
    theme = {
        Light: {
            "--Toggle": "hsl(230, 22%, 74%)",
            "--BG": "hsl(0, 0%, 100%)",
            "--BGTop": "hsl(225, 100%, 98%)",
            "--CardBG": "hsl(227, 47%, 96%)",
            "--CardBGHover": "hsl(227, 50%, 98%)",
            "--TextLight": "hsl(228, 12%, 44%)",
            "--TextDark": "hsl(230, 17%, 14%)",
        },
        Dark: {
            "--Toggle": "linear-gradient(to right,  hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
            "--BG": "hsl(230, 17%, 10%)",
            "--BGTop": "hsl(232, 19%, 15%)",
            "--CardBG": "hsl(228, 28%, 20%)",
            "--CardBGHover": "hsl(228, 28%, 30%)",
            "--TextLight": "hsl(228, 34%, 66%)",
            "--TextDark": "hsl(0, 0%, 100%)",
        }
    }

ball.addEventListener("click", _ => {
    ball.classList.toggle("ac")
    SetTheme(ball.classList.contains("ac"))
})

function SetTheme(b) {
    if (b) {
        let k = Object.keys(theme["Dark"])
        for (let i = 0; i < k.length; i++) {
            document.documentElement.style.setProperty(k[i], theme["Dark"][k[i]])
        }
    }
    else {
        let k = Object.keys(theme["Light"])
        for (let i = 0; i < k.length; i++) {
            document.documentElement.style.setProperty(k[i], theme["Light"][k[i]])
        }
    }
}