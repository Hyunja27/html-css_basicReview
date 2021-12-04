// alert("Hello??")
const logInForm = document.querySelector("#login-form")
const logIntxt = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const linkGithub = document.querySelector("#git-link")
// function login()
// {
//     if (logIntxt.value === "")
//         alert("No name! please write your name.")
//     else if (logIntxt.value.length > 10)
//         alert("too long name.")

// }

function handleloginSubmit(event)
{
    event.preventDefault()
    const userName = logIntxt.value

    logInForm.classList.toggle("hidden")
    console.log(event)
    greeting.classList.toggle("hidden")
    greeting.innerHTML = ("Hello! " + userName);
}

function handleLinkGithub(event)
{
    event.preventDefault()
    console.log(event)
}


logInForm.addEventListener("submit", handleloginSubmit)
linkGithub.addEventListener("click", handleLinkGithub)