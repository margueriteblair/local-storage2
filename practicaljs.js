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
        addTodoTextInput.value = "";
        view.displayTodos()
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById("changeTodoPositionInput")
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos()
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos()
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.valueAsNumber="";
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
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton'
        return deleteButton;
    },

    setUpEventListeners: function() {
        let todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function() {
    let elementClicked = event.target; //this cgets the clicked on element

    if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(event.target.parentNode.id));
    }


});
    }
};
view.setUpEventListeners();

