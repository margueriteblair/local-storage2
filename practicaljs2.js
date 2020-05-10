//place to store todos
//programming term for a list is an 'array'

let todos = ["task1", "task2", "task3"];

function displayTodos() {
    console.log("My Todos:", todos);
}
displayTodos();

//way to add new todos
function addTodos(todo) {
    todos.push(todo);
    displayTodos();
}
addTodos();

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos()
}

function deleteTodo(position) {
    todos.splice(position, 1)
    displayTodos();
}