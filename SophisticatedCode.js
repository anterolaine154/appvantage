/* 
    Filename: SophisticatedCode.js
    Description: This code demonstrates an elaborate and complex implementation of a task management system using JavaScript.
*/

// Task class to represent individual task objects
class Task {
    constructor(id, name, description, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}

// TaskManager class to manage tasks
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add a new task to the task manager
    addTask(name, description) {
        const id = this.tasks.length + 1;
        const task = new Task(id, name, description, 'Open');
        this.tasks.push(task);
    }

    // Get all tasks in the task manager
    getAllTasks() {
        return this.tasks;
    }

    // Get tasks by status (Open, In Progress, Completed)
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }

    // Update the status of a task
    updateTaskStatus(id, newStatus) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = newStatus;
        }
    }

    // Delete a task from the task manager
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}

// Sample usage of the TaskManager class
const taskManager = new TaskManager();

taskManager.addTask('Task 1', 'Complete the documentation');
taskManager.addTask('Task 2', 'Fix the bug in the login feature');
taskManager.addTask('Task 3', 'Implement new feature XYZ');

console.log(taskManager.getAllTasks());

taskManager.updateTaskStatus(2, 'In Progress');

console.log(taskManager.getTasksByStatus('Open'));

taskManager.deleteTask(1);

console.log(taskManager.getAllTasks());