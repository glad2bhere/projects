// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listerners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    //Remove task list
    taskList.addEventListener('click', removeTask);
    // CLear task Event
    clearBtn.addEventListener('click', clearTasks);
    //Filter through the tasks
    filter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask() {
    if(taskInput.value === '') {
        alert('Add a task');
        return
    }

    // Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    // Create Text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create New link element (x - delete button)
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    //Append li to the ul
    taskList.appendChild(li);
    
    //Claer the input
    taskInput.value = '';

    e.preventDefault();
}

// Delete Task (little x on right side ot task card)
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
       // This shows that it is grabbing the x when clicked on -> console.log(e.target);
       if(confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();
       }
    }
}

//Clear tall tasks
function clearTasks() {
    // 1 way of doing it -> taskList.innerHTML = '';

    //Faster way of doing it
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text);
    //document.querySelector returns a node list (and not ann array) which is why we can use .forEach()
    document.querySelectorAll('.collection-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
    
        });
}