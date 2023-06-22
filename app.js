/* ----------MINHA RESOLUÇÃO----------- */

'use strict'

const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearchInput = document.querySelector('.form-search')

const addTodo = inputValue => {
    if (inputValue.length) {
        todosContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt " data-trash="${inputValue}"></i></li>`
    }
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    addTodo(inputValue)

    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const dataTrashValue = event.target.dataset.trash
    const todo = document.querySelector(`[data-todo="${dataTrashValue}"]`)

    if (dataTrashValue) {
        todo.remove()
    }
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)

        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach( todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    });
}

const hideTodos = (todos, inputValue) => {
    const todosToHide = filterTodos(todos, inputValue, false)
    manipulateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    const todosToShow = filterTodos(todos, inputValue, true)
    manipulateClasses(todosToShow, 'd-flex', 'hidden')
}

formSearchInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim()
    const todos = Array.from(todosContainer.children)

    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
})



/*  ---------------RESOLUÇÃO DO PROFESSOR----------------

const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = (inputValue, event) => {
    if (inputValue.length) {
        todosContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt " data-trash="${inputValue}"></i></li>`

        event.target.reset()
    }
}

formAddTodo.addEventListener('submit', event => {

    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    addTodo(inputValue, event)
})

const removeTodo = clickedElement => {
    const dataTrashValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${dataTrashValue}"]`)

    if (dataTrashValue) {
        todo.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)

        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    })
}

const hideTodos = (todos, inputValue) => {
    const todosToHide = filterTodos(todos, inputValue, false)
    manipulateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    const todosToShow = filterTodos(todos, inputValue, true)
    manipulateClasses(todosToShow, 'd-flex', 'hidden')
}

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(todosContainer.children)

    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
})
 */