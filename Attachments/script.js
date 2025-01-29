// Get references to DOM elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to create a new To-Do item
function createTodoItem(task) {
    const listItem = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(listItem);
    };

    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Add new task when the button is clicked
addButton.addEventListener('click', function() {
    const task = inputField.value.trim();
    if (task) {
        const todoItem = createTodoItem(task);
        todoList.appendChild(todoItem);
        inputField.value = ''; // Clear the input field
    }
});

// Optionally, add task using Enter key
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const task = inputField.value.trim();
        if (task) {
            const todoItem = createTodoItem(task);
            todoList.appendChild(todoItem);
            inputField.value = ''; // Clear the input field
        }
    }
});
