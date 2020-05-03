const toDoForm = document.querySelector(".js-toDoForm");

toDoInput = toDoForm.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

// function filterFunc(toDo){
//     return toDo.id === 1;
// }

function deleteTodo(event){
    console.dir(event.target.parentNode);

    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanTodos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });

    toDos  = cleanTodos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    const span = document.createElement("span");

    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);

    li.id = newId;

    toDoList.appendChild(li);
    
    const toDoObj = {
        text : text,
        id : newId,

    }

    toDos.push(toDoObj);
    saveToDos();
}

function loadTodos(){
    console.log("loadTodos");
    const lTods = localStorage.getItem(TODOS_LS);

    console.log("loadedTos" + lTods);

    if ( lTods !== null ){
        console.log("loadedTos !== null" + lTods);
        const parsedToDos = JSON.parse(lTods);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })

        // console.log("parsedToDos : "  + parsedToDos);
    } 
}

function handleSubmit(event){
    console.log("handleSubmit");
    event.preventDefault();
    const cValue  = toDoInput.value;
    paintToDo( cValue );
    toDoInput.value = "";
}

function init(){
    loadTodos();
    toDoForm.addEventListener( "submit", handleSubmit);
}

init();