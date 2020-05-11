//place to store todos
//programming term for a list is an 'array'


let todoList = {
    todos: [],
     addTodos: function(todoText) {
         this.todos.push({
             todoText: todoText,
             completed: false
        });
     },

     changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
     },

     deleteTodo: function(position) {
         this.todos.splice(position, 1);
     },

     toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
     },
     toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if(completedTodos === totalTodos) {
            for(let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;   
            }
        }
        this.displayTodos();
     }
};

// let displayTodosButton = document.getElementById("displayTodosButton");
// let toggleAllButton = document.getElementById("toggleAllButton")

// displayTodosButton.addEventListener("click", function() {
//     todoList.displayTodos();

// })

// toggleAllButton.addEventListener("click", function(){
//     todoList.toggleAll();
// })

let handlers = {
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos()
    },
    addTodos: function() {
        let addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodos(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos()
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById("changeTodoPositionInput")
        let changeTodoTextInput = document.getElementById("changeTodoTextInput")
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos()
    },
    deleteTodo: function() {
        let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos()
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput")
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value ="";
        view.displayTodos()
    }
};

view = {
    displayTodos: function() {
        let todosUl = document.querySelector('ul')
        todosUl.innerHTML = "";
        for (let i = 0; i < todoList.todos.length; i++) {
            let todosLi = document.createElement('li');
            let todo = todoList.todos[i];
            let todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = `(x)` + todo.todoText;
            } else {
                todoTextWithCompletion = `()` + todo.todoText;
            }
            todoList.textContent = todoTextWithCompletion;
            todosUl.appendChild(todosLi)
        }
    }
}


