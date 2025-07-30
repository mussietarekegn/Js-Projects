const taskInput=document.getElementById('task-input');
const addB=document.getElementById('add-btn');
const taskList=document.getElementById('list-task');

window.addEventListener('DOMContentLoaded',loadTasksFromStorage);

addB.addEventListener('click',addTask);

function addTask(){
    const taskText=taskInput.value.trim();

    if (taskText===''){
        alert('Please enter a task!');
        return;
    }

    const li=document.createElement('li');

    li.innerHTML=`${taskText} <button class="delete-btn">Delete</button>`;

    taskList.appendChild(li);

    saveTaskToStorage(taskText);

    taskInput.value='';

    const del=li.querySelector('.delete-btn');
    del.addEventListener('click',()=>{
        deletee(li,taskText);
    });
}
 
function saveTaskToStorage(task){
    let tasks=JSON.parse(localStorage.getItem('tasks'))||[];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function deletee(li,taskText){
    li.remove();
    let tasks=JSON.parse(localStorage.getItem('tasks'))||[];
    tasks=tasks.filter(task=>task!==taskText);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTasksFromStorage(){
    let tasks=JSON.parse(localStorage.getItem('tasks'))||[];
    tasks.forEach(task=>{
        const li=document.createElement('li');
        li.innerHTML=`${task}  <button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);
        const del=li.querySelector('.delete-btn');
        del.addEventListener('click',()=>{
            deletee(li,task);
        })
    })
}