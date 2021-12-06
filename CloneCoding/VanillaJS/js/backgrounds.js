const images=[
    "a.png",
    "b.JPG",
    "c.JPG"
    ];

const jndex = Math.floor((Math.random() * images.length))

const rand_img = images[jndex]
// const rand_img = document.querySelector("#")

const back_img = document.createElement("img")

back_img.src = `img/${rand_img}`

document.body.appendChild(back_img);

