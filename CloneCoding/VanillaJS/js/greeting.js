// alert("Hello??")
const logInForm = document.querySelector("#login-form")
const logIntxt = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const linkGithub = document.querySelector("#git-link")
const USERNAME_KEY = "username"
const currentUser = localStorage.getItem(USERNAME_KEY)

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
    localStorage.setItem(USERNAME_KEY, userName)

    logInForm.classList.toggle("hidden")
    console.log(event)
    showgreeting(userName)
}
    

function handleLinkGithub(event)
{
    event.preventDefault()
    console.log(event)
}

function showgreeting(user)
{
    greeting.innerHTML = ("Hello! " + user);
    greeting.classList.toggle("hidden")
}

linkGithub.addEventListener("click", handleLinkGithub)

if (currentUser === null)
{
    logInForm.classList.remove("hidden")
    logInForm.addEventListener("submit", handleloginSubmit)
}
else
    showgreeting(currentUser)
