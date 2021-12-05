const images=[
    "a.png",
    "b.JPG",
    "c.JPG"
    ];

const index = Math.round((Math.random() * images.length))

const quote = document.querySelector("#quote")
const author = document.querySelector("#author")

quote.innerHTML = quotes[index].quote
author.innerHTML = quotes[index].author
