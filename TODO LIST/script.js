
const inputBox = document.getElementById('inputBox')
const addbtn = document.getElementById('addbtn')
const todolist = document.getElementById('todolist')

let editTodo = null;
// function add to do 
const addToDo = () => {
    const inutText = inputBox.value.trim();
    if (inutText.length <= 0) {
        alert('write something')
        return false;
    }

    // edit button  functionalty
    if (addbtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inutText
       
        editLocalTodos(inutText)
        addbtn.value = "Add"
        inputBox.value = ""
    }
    else {
        // creat a p tag
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.innerHTML = inutText
        li.appendChild(p)



        // creat edit  btn
        const editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.classList.add("btn", "editBtn")
        li.appendChild(editBtn)


        // creat deletbtn 
        const deletbtn = document.createElement("button")
        deletbtn.innerHTML = "Remove"
        deletbtn.classList.add("btn", "deletbtn")
        li.appendChild(deletbtn)

        // append created li in ul
        todolist.appendChild(li)
        inputBox.value = ""

        saveLocalTodo(inutText)
    }
}


// function update to do
const updateToDo = (e) => {
    //console.log(e.target.innerHTML)
    if (e.target.innerHTML === "Remove") {
        todolist.removeChild(e.target.parentElement)
        deletLocalTodos(e.target.parentElement)
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML
        inputBox.focus()
        addbtn.value = "Edit"
        editTodo = e
    }

}

const saveLocalTodo = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))

    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    //  console.log(todos)

}

const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
        todos.forEach(todo => {
            // creat a p tag
            const li = document.createElement("li")
            const p = document.createElement("p")
            p.innerHTML = todo
            li.appendChild(p)



            // creat edit  btn
            const editBtn = document.createElement("button")
            editBtn.innerHTML = "Edit"
            editBtn.classList.add("btn", "editBtn")
            li.appendChild(editBtn)


            // creat deletbtn 
            const deletbtn = document.createElement("button")
            deletbtn.innerHTML = "Remove"
            deletbtn.classList.add("btn", "deletbtn")
            li.appendChild(deletbtn)

            // append created li in ul
            todolist.appendChild(li)
        });

    }

}

const deletLocalTodos = (todo) =>{
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))

    }
    let todoText = todo.children[0].innerHTML
    let todoIndex =todos.indexOf(todoText)
    todos.splice(todoIndex,1)
    localStorage.setItem("todos",JSON.stringify(todos))
    // splice function
}

const editLocalTodos = (todo) =>{
    console.log(todo)
    let todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos)
     let todoIndex = todos.indexOf(todo)
     console.log(todoIndex)
    todos[todoIndex] = inputBox.value.trim()
    console.log(todos[todoIndex])
    localStorage.setItem("todos",JSON.stringify(todos))
}

document.addEventListener('DOMContentLoaded',getLocalTodos)
addbtn.addEventListener('click', addToDo);
todolist.addEventListener('click', updateToDo)


