//place to store todos
//programming term for a list is an 'array'


let todoList = {
    todos: [],
     displayTodos: function() {
        if (this.todos.length === 0) {
            console.log(`Your todo list is empty!`)
        } else {
            console.log('My todos:');
            for (let i = 0; i < this.todos.length; i++) {
               if (this.todos[i].completed === true) {
                   console.log(`(x)`, this.todos[i].todoText);
               } else {
                   console.log(`()`, this.todos[i].todoText);
               }
        }
        }
     },

     addTodos: function(todoText) {
         this.todos.push({
             todoText: todoText,
             completed: false
        });
         this.displayTodos()
     },

     changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
     },

     deleteTodo: function(position) {
         this.todos.splice(position, 1);
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

        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        })
        if(completedTodos === totalTodos) {
            this.todos.forEach(function(todo){
                todo.completed = false;
            })
        } else {
            this.todos.forEach(function(todo) {
                todo.completed=true;
            })
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
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
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
        // for (let i = 0; i < todoList.todos.length; i++) {
        //     let todosLi = document.createElement('li');
        //     let todo = todoList.todos[i];
        //     let todoTextWithCompletion = "";

        //     if (todo.completed === true) {
        //         todoTextWithCompletion = "(x)" + todo.todoText;
        //     } else {
        //         todoTextWithCompletion = "()" + todo.todoText;
        //     }

        //     todosLi.id = i;
        //     todosLi.textContent = todoTextWithCompletion;
        //     todosLi.appendChild(this.createDeleteButton())
        //     todosUl.appendChild(todosLi)
        // }
        todoList.todos.forEach(function(todo, position){
            let todosLi = document.createElement('li');
            let todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x)" + todo.todoText;
            } else {
                todoTextWithCompletion = "()" + todo.todoText;
            }

            todosLi.id = position;
            todosLi.textContent = todoTextWithCompletion;
            todosLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todosLi);
        }, this);
    },
    createDeleteButton: function() {
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"
        deleteButton.className = "deleteButton";
        return deleteButton;
        
    },
    setUpEventListeners: function() {
        let todosUl = document.querySelector("ul")
        todosUl.addEventListener("click", function(event) {
            console.log(event.target.parentNode.id)
        
        let elementClicked = event.target;
        
        if (elementClicked.className === 'deleteButton') {
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
        })
    }
}
view.setUpEventListeners();



