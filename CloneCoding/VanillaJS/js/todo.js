const todo_input = document.querySelector("#todo_input")
const todo_list = document.querySelector("#todo_list")
const todo_txt = todo_input.querySelector("input")

function eraseLine(event)
{
    console.log(event.target.parentNode)
    event.target.parentNode.remove()

}
function addline(newElem, toDoTxt)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const eraseBtn = document.createElement("button");

    span.innerHTML = toDoTxt;
    eraseBtn.innerHTML = "❌";
    li.appendChild(eraseBtn);
    li.appendChild(span);
    todo_list.appendChild(li);
    eraseBtn.addEventListener("click", eraseLine)
}

function todoChecker(event)
{
    event.preventDefault();
    if (todo_txt.value === null)
        alert("No doing thing. write something!")
    else
    {
        const toDo = todo_txt.value;
        todo_txt.value = ""
        const new_line = document.createElement("li")
        new_line.innerHTML = toDo;
        addline(new_line, toDo)
    }
}

todo_input.addEventListener("submit", todoChecker);
