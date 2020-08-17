var listElement = document.querySelector(".ul")
var inputElement = document.querySelector(".inputText")
var buttonElement = document.querySelector(".button")

var todos = JSON.parse(localStorage.getItem('list_todos')) || []


function renderTodos() {
    listElement.innerHTML = ""
    for (var todo of todos) {
        var todoElement = document.createElement('li')
        var linkElement = document.createElement('a')
        var todoText = document.createTextNode(todo)
        var pos = todos.indexOf(todo)

        linkElement.setAttribute('onclick', `deleteTodo(${pos})`)
        linkElement.appendChild(document.createTextNode(' - Excluir '))
        linkElement.setAttribute('href', '#')
        listElement.appendChild(todoElement)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
    }
}

renderTodos()

buttonElement.addEventListener('click', () => {
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ""
    renderTodos()
    saveToStorage()
})



function deleteTodo(pos) {
    todos.splice(pos, 1)
    saveToStorage()
    renderTodos()

}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

