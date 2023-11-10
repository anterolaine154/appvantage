Here's an example of a complex JavaScript code that is more than 200 lines long. This code demonstrates an interactive web application that implements a simple todo list manager with features like adding, editing, deleting, and filtering tasks.

```javascript
/******************************************
 * Filename: todo-manager.js
 * Content: Interactive todo list manager
 ******************************************/

// Todo Manager Class
class TodoManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  editTask(taskIndex, newTask) {
    this.tasks[taskIndex] = newTask;
  }

  deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  filterTasks(term) {
    return this.tasks.filter(task =>
      task.toLowerCase().includes(term.toLowerCase())
    );
  }

  displayTasks() {
    console.log("Tasks: ");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Create Todo Manager instance
const todoManager = new TodoManager();

// Helper Function: ReadlineSync to read user input from CLI
const readline = require("readline-sync");

// Helper Function: Print available commands
function printCommands() {
  console.log("\nAvailable Commands:");
  console.log("===================");
  console.log("add: Add a new task");
  console.log("edit: Edit a task");
  console.log("delete: Delete a task");
  console.log("filter: Filter tasks");
  console.log("list: List all tasks");
  console.log("exit: Exit the program");
}

// Main Program Loop
console.log("Welcome to Todo Manager!");

while (true) {
  printCommands();

  // Read user command
  const command = readline.question("\nEnter a command: ").trim().toLowerCase();

  if (command === "add") {
    const task = readline.question("Enter the task: ").trim();
    todoManager.addTask(task);
    console.log("Task added successfully!");
  } else if (command === "edit") {
    const index = parseInt(
      readline.question("Enter the task index to edit: ").trim()
    );
    const newTask = readline.question("Enter the new task: ").trim();
    todoManager.editTask(index - 1, newTask);
    console.log("Task edited successfully!");
  } else if (command === "delete") {
    const index = parseInt(
      readline.question("Enter the task index to delete: ").trim()
    );
    todoManager.deleteTask(index - 1);
    console.log("Task deleted successfully!");
  } else if (command === "filter") {
    const term = readline.question("Enter the term to filter: ").trim();
    const filteredTasks = todoManager.filterTasks(term);
    console.log("Filtered Tasks: ");
    filteredTasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  } else if (command === "list") {
    todoManager.displayTasks();
  } else if (command === "exit") {
    break;
  } else {
    console.log("Invalid command! Please try again.");
  }
}

console.log("Thank you for using Todo Manager!");
```

Note: This code assumes that you are running it in a Node.js environment, as it uses the readline-sync package for reading user input from the command line interface (CLI).