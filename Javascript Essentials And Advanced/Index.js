// Select the input, button, and list elements from the DOM
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Event listener for adding a new todo
addTodoBtn.addEventListener('click', () => {
    // Get the input value and trim any extra spaces
    const newTodo = todoInput.value.trim();

    if (newTodo) {
        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.textContent = newTodo;

        // Append the new list item to the todo list
        todoList.appendChild(listItem);

        // Clear the input field after adding the todo
        todoInput.value = '';

        // Update the cookies with the current todo list
        updateCookies();
    } else {
        alert('Please enter a valid todo item!');
    }
});

// Function to update cookies with the current todo list
function updateCookies() {
    // Retrieve all list items in the todo list
    const todos = Array.from(todoList.children).map(item => item.textContent);

    // Convert the todo list to a string and store it in a cookie
    document.cookie = `todos=${JSON.stringify(todos)}; path=/;`;
}

// Function to load todos from cookies when the page loads
function loadTodosFromCookies() {
    // Get the 'todos' cookie
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(cookie => cookie.startsWith('todos='));

    if (todoCookie) {
        // Parse the cookie value into an array
        const todos = JSON.parse(todoCookie.split('=')[1]);

        // Populate the todo list with items from the cookie
        todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo;
            todoList.appendChild(listItem);
        });
    }
}

// Load existing todos from cookies when the page is loaded
window.addEventListener('load', loadTodosFromCookies);
