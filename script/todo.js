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
/* FALTA:
se apertar de novo, desmarca
confirmar antes de cancelar


estilizar para deixar como feito (inserir a classe done / MUDAR PARA CLASSE DONE)
filtro 
*/


let tasks = []

function catchDiv(index){
    const divs = document.getElementsByClassName('todo')
    for (var i = 0; i < divs.length; i++){
        const indice = divs[i].dataset.index
        if (indice == index){
            return divs[i]
        }
    }
}

//add a task

function addOnTaskList(){
    const cont = formTodo.add.value
    if (cont == ""){
        alert("Dê um nome para sua tarefa. ")
        formTodo.add.focus()
    } else {
      tasks.push({'tarefa' : cont, 'status' : ''})
      update()  
      formTodo.add.value = ""
    }
    
}

function addTask(cont, index){
    const item = document.createElement('div')
    item.classList.add('todo')  
    item.setAttribute('data-index', index)
    item.innerHTML = 
            `Done <input type="checkbox" class="check" onchange="setCheck(${index})" data-index=${index}">
            <h3> ` + cont + `</h3>
             <button class="edit" data-index=${index}>Edit</button>
            <button class="remove" onclick="remove(${index})" data-index=${index}>Remove</button> 
        `
    document.getElementById('to-do').appendChild(item)
}

function clean() {
    const div = document.querySelector('#to-do')
    while(div.firstChild){
        div.removeChild(div.lastChild)
    }
}

function update(){
    clean()
    tasks.forEach((item, index) => addTask(item.tarefa, index))
}

//filter tasks

function setCheck(index){
    const check = document.getElementsByClassName('check')
    const c = check[index]

    if (c.checked == true){
        tasks[index].status = 'checked'
    } else {
        tasks[index].status = ''
    }
    /*
    for (let i = 0; i < tasks.length; i++){
        if (i == index){
            console.log(catchDiv(i))
            const div = catchDiv(i)
            if (div.className == 'todo'){
                tasks[index].status = 'checked'
                div.classList.remove('todo')
                div.classList.add('done')
            } else if (div.className == 'done'){
                tasks[index].status = ''
                div.classList.remove('done')
                div.classList.add('todo')
            }

        }
    } 
    */

}  

function filter(){
    var opc = document.getElementById('filter')
    if (opc.selectedIndex == 1){
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].status = 'checked'){

            }
        }
    } else if (opc.selectedIndex == 2){
        alert('listar os não feitos')
    } else {
        alert('listar todos')
    }
}

//remove tasks

function remove(index){
    if (confirm("Deseja excluir essa tarefa?")){
        tasks.splice(index, 1)
        update()   
    }
}