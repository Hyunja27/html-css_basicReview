const clock = document.querySelector("#clock")

function showclock(event)
{
    const date = new Date()
    const year = String(date.getFullYear())
    const hour = String(date.getHours())
    const minute = String(date.getMinutes())
    const second = String(date.getSeconds()).padStart(2,"0")
    clock.innerHTML = year + "y . " + hour + "h . " + minute + "m . " +second
}

setInterval(showclock, 1000)