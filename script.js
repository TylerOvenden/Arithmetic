// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Event listener for adding tasks
addButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        
        // Add a button to remove tasks
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
        
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});
