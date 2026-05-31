let todos =
    JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
const count = document.querySelector("#count");

function saveTodos(){
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function updateCount(){

    const active =
        todos.filter(todo => !todo.completed).length;

    count.textContent =
        `${active} items left`;
}

function renderTodos(){

    todoList.innerHTML = "";

    let filtered = todos;

    if(currentFilter === "active"){
        filtered =
            todos.filter(todo => !todo.completed);
    }

    if(currentFilter === "completed"){
        filtered =
            todos.filter(todo => todo.completed);
    }

    filtered.forEach(todo => {

        const li =
            document.createElement("li");

        li.dataset.id = todo.id;

        if(todo.completed){
            li.classList.add("completed");
        }

        const span =
            document.createElement("span");

        span.textContent = todo.text;

        const del =
            document.createElement("button");

        del.textContent = "❌";
        del.classList.add("delete");

        li.appendChild(span);
        li.appendChild(del);

        todoList.appendChild(li);

    });

    updateCount();
    saveTodos();
}

function addTodo(){

    const text =
        todoInput.value.trim();

    if(text === "") return;

    todos.push({
        id: Date.now(),
        text,
        completed:false
    });

    todoInput.value = "";

    renderTodos();
}

addBtn.addEventListener(
    "click",
    addTodo
);

todoInput.addEventListener(
    "keydown",
    e => {
        if(e.key === "Enter"){
            addTodo();
        }
    }
);

todoList.addEventListener(
    "click",
    e => {

        const li =
            e.target.closest("li");

        if(!li) return;

        const id =
            Number(li.dataset.id);

        const todo =
            todos.find(t => t.id === id);

        if(e.target.classList.contains("delete")){

            todos =
                todos.filter(
                    t => t.id !== id
                );

            renderTodos();
        }

        else if(e.target.tagName === "SPAN"){

            todo.completed =
                !todo.completed;

            renderTodos();
        }

    }
);

todoList.addEventListener(
    "dblclick",
    e => {

        if(e.target.tagName !== "SPAN")
            return;

        const li =
            e.target.closest("li");

        const id =
            Number(li.dataset.id);

        const todo =
            todos.find(t => t.id === id);

        const input =
            document.createElement("input");

        input.value = todo.text;

        input.classList.add(
            "edit-input"
        );

        li.replaceChild(
            input,
            e.target
        );

        input.focus();

        input.addEventListener(
            "keydown",
            ev => {

                if(ev.key === "Enter"){

                    todo.text =
                        input.value.trim();

                    renderTodos();

                }

            }
        );

    }
);

document
.querySelectorAll("[data-filter]")
.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            currentFilter =
                btn.dataset.filter;

            renderTodos();

        }
    );

});

document
.querySelector("#clearCompleted")
.addEventListener(
    "click",
    () => {

        todos =
            todos.filter(
                todo => !todo.completed
            );

        renderTodos();

    }
);

renderTodos();