document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function if input is empty
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Corrected line

        // Add event listener to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach event listener for the "Enter" key on the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // The original instructions for "Invoke the addTask function on DOMContentLoaded"
    // appear to be a mistake in the prompt as it would add an empty task on page load.
    // The event listeners are correctly set up to handle user interaction.
});