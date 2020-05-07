//it should have a place to store todos 
//display todos
//way to add new todo
//change a todo
//way to delete a todo


let todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log(`Your todo list is empty!`)
        } else {
            console.log(`My Todos:`)
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log(`(x)`,this.todos[i].newTodoText);
                } else {
                    console.log(`()`, this.todos[i].newTodoText);
                }
            }
        }
    
    },
    addTodo: function(newTodoText) {
        this.todos.push({
            newTodoText: newTodoText,
            completed: false
        })
        this.displayTodos();
    },
    changeTodo: function(position, newTodoText) {
        this.todos[position].newTodoText = newTodoText
        this.displayTodos()
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for (let i = 0; i < totalTodos; i++) {
           if (this.todos[i].completed === true) {
                completedTodos++
            }
        }
           if (completedTodos === totalTodos) {
                for (let i = 0; i < totalTodos; i++) {
                    this.todos[i].completed = false;
                }
           } else {
               for (let i = 0; i < totalTodos; i++) {
                   this.todos[i].completed = true;
               }
           }
           this.displayTodos();
           view.displayTodos();
        }
    }

let handlers = {
    addTodo: function() {
        let addTodoTextInput = document.getElementById("addTodoTextInput")
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput = "";
        view.displayTodos()
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById("changeTodoPositionInput")
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoPositionInput = "";
        changeTodoTextInput = "";
        view.displayTodos()
    },
    deleteTodo: function() {
        let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput")
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput = "";
        view.displayTodos()
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput="";
        view.displayTodos();
    }
}

let view = {
    displayTodos: function() {
        let todosUl = document.querySelector('ul')
        todosUl.innerHTML = "";
        for (let i = 0; i<todoList.todos.length;i++) {
            let todoLi = document.createElement('li')
            let todo = todoList.todos[i];
            let todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = `(x)` + todo.newTodoText;
            } else {
                todoTextWithCompletion = `()` + todo.newTodoText;
            }
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
}
