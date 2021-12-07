const todo_input = document.querySelector("#todo_input")
const todo_list = document.querySelector("#todo_list")
const todo_txt = todo_input.querySelector("input")
const TODO_KEY = "ToDos"
let toDo_array = [];
let parsedToDo = null
const savedToDo = localStorage.getItem(TODO_KEY)

if (savedToDo !== null)
{
    toDo_array = JSON.parse(savedToDo)
    parsedToDo = JSON.parse(savedToDo)
    parsedToDo.forEach(drawTodo);
}

function eraseLine(event)
{
    console.log(event.target.parentNode)
    const targetId = parseInt(event.target.parentNode.id)
    toDo_array = toDo_array.filter((a) => a.id !== targetId)
    event.target.parentNode.remove()
    localStorage.setItem(TODO_KEY, JSON.stringify(toDo_array))
}

function drawTodo(elem)
{
    console.log(elem)
    const li = document.createElement("li");
    li.id = elem.id
    const span = document.createElement("span");
    const eraseBtn = document.createElement("button")
    span.innerHTML = elem.val;
    eraseBtn.innerHTML = "❌";
    li.appendChild(eraseBtn);
    li.appendChild(span);
    todo_list.appendChild(li);
    eraseBtn.addEventListener("click", eraseLine)

}

function addline(toDo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const eraseBtn = document.createElement("button");
    li.id = toDo.id
    span.innerHTML = toDo.val;
    eraseBtn.innerHTML = "❌";
    li.appendChild(eraseBtn);
    li.appendChild(span);
    todo_list.appendChild(li);
    eraseBtn.addEventListener("click", eraseLine)
}

function todoChecker(event)
{
    event.preventDefault();
    if (todo_txt.value === "")
        alert("No doing thing. write something!")
    else
    {
        const toDo = todo_txt.value;
        const toDoObj = {
            "id"    : Date.now(),
            "val"   : toDo
        }
        toDo_array.push(toDoObj);
        localStorage.setItem(TODO_KEY, JSON.stringify(toDo_array))
        todo_txt.value = ""
        // const new_line = document.createElement("li")
        // new_line.innerHTML = toDo;
        addline(toDoObj)
        // drawTodo()
    }
}

todo_input.addEventListener("submit", todoChecker);
