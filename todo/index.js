/* selectors */
const todoInput = document.querySelector('.todoInput');
const addButton = document.querySelector('.addButton');
const todoList = document.querySelector('.todoList');
const todoFilter = document.querySelector(".filter-todo");


/* alerts */
const success = document.querySelector('.success');
const warning = document.querySelector('.warning');

/* events */
document.addEventListener("DOMContentLoaded", function () {
    getTodos();
});
addButton.addEventListener("click", addTodo);
todoList.addEventListener('click', checks)
todoFilter.addEventListener("click", filterTodo)

/* functions */


//ekleme fonksiyonu ve alarmlar
function addTodo(e){

    e.preventDefault();

    let todoValue = todoInput.value; 

/*  const isEmpty = str => !str.trim().length;

    if (isEmpty(todoInput.value)) 
    boyle de string boş mu  değil mi kontrol edilir.

*/ 

    if(todoValue == 0){
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 1500);
    }else{

        saveLocalTodos(todoInput.value);

        e.preventDefault();

        const addDıv = document.createElement("div");
        addDıv.classList.add('todo');
        
        const addButton1 = document.createElement('button');
        addButton1.classList.add('checkedButton');
        addButton1.innerHTML = '<i class="fa-solid fa-check"></i>';
        addDıv.appendChild(addButton1);
    
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerText = todoInput.value;
        addDıv.appendChild(todoItem);
    
        const addButton2 = document.createElement('button');
        addButton2.classList.add('deleteButton');
        addButton2.innerHTML = '<i class="fa-solid fa-ban"></i>';
        addDıv.appendChild(addButton2);
    
        todoList.appendChild(addDıv);
    
        todoInput.value = "";

        success.style.display = 'block';
        setTimeout(() => {
            success.style.display = 'none';
        }, 1500);
    
    }
    
}



//silme fonksiyonu
function checks(e) {
    const item = e.target;
    
    if(item.classList[0] === 'deleteButton'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocaleStorage(todo)
        todo.addEventListener('transitionend', function(){
            todo.remove();
        } )
    }

    if (item.classList[0] === 'checkedButton') {
        const checkLe = item.parentElement; //itemin içindeki elementleri kastediyoruz.
        checkLe.classList.toggle('completed');//togle basıp çekme olayıdır.
    }

}


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (item) {
        switch (e.target.value) {
            case "all":
                item.style.display = "flex";
                break;
            case "completed":
                if (item.classList.contains("completed")) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!item.classList.contains("completed")) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
        }
    })
}

//! locale Storage
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos(){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((todo) =>{
        const addDıv = document.createElement("div");
        addDıv.classList.add('todo');
        
        const addButton1 = document.createElement('button');
        addButton1.classList.add('checkedButton');
        addButton1.innerHTML = '<i class="fa-solid fa-check"></i>';
        addDıv.appendChild(addButton1);
    
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerText = todo;
        addDıv.appendChild(todoItem);
    
        const addButton2 = document.createElement('button');
        addButton2.classList.add('deleteButton');
        addButton2.innerHTML = '<i class="fa-solid fa-ban"></i>';
        addDıv.appendChild(addButton2);
    
        todoList.appendChild(addDıv);
    });

}


    function removeLocaleStorage(todo) {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        const todoIndex = todo.children[1].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    

  