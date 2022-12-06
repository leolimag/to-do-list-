/* TAREFA CONCLUIDA
        <div class="done">
            <h3>Tarefa 2</h3>
            <button class="send">Send</button>
            <button class="edit">Edit</button>
            <button class="remove">Remove</button>
        </div>
*/

/* TAREFA A SER FEITA
            <div class="todo">
                <h3>Tarefa 1</h3>
                <button class="send">Send</button>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
            </div>
*/



tasks = []

function addTask(){
    var cont = formTodo.add.value
    if (cont != ""){
        const item = document.createElement('label')
        item.classList.add('todo')
        item.innerHTML = `<div class="todo">
                <h3> ` + cont + `</h3>
                <button class="send">Send</button>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
            </div>`
        document.getElementById('to-do').appendChild(item)
        formTodo.add.value = ""
    } else {
        alert("Dê um nome para a tarefa.")
        formTodo.add.focus()
    }
}

function filter(){
    var opc = document.getElementById('filter')
    if (opc.options.value == "done"){
        //lista apenas os já feitos 
        alert('listar os já feitos')
        console.log(opc.selectedIndex);
    } else if (opc.options.value == "todo"){
        //lista apenas os não feitos
        alert('listar os não feitos')
        console.log(opc.selectedIndex);
    } else {
        //lista todos
        alert('listar todos')
        console.log(opc.selectedIndex);
    }
}