import { elements, renderTask, toggleEmptyState, clearInput } from './ui.js';
import { saveTasks, getTasks } from './storage.js';

let tasks = getTasks();

const validTitle = (title) => {
    const rule = /^[a-zA-Z0-9\s]+$/;
    if (rule.test(title) === true) {
        return true;
    } else {
        return false;
    }
};

export const addTask = (title) => {
    if (title.trim() === "") {
        alert("Empty task");
        return null;
    }

    if (validTitle(title) === false) {
        alert("No special characters allowed");
        return null;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
};


export const deleteTask = (id) => {
    let newTasksList = [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id !== id) {
            newTasksList.push(tasks[i]);
        }
    }
    tasks = newTasksList;
    saveTasks(tasks);
};

export const initTodo = () => {

    for (let i = 0; i < tasks.length; i++) {
        renderTask(tasks[i], handleActionDelete);
    }
    toggleEmptyState(tasks.length);

    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = elements.input.value;
        const newTask = addTask(text);

        if (newTask !== null) {
            renderTask(newTask, handleActionDelete);
            toggleEmptyState(tasks.length);
            clearInput();
        }
    });
};

const handleActionDelete = (id, element) => {
    deleteTask(id);
    element.remove();
    toggleEmptyState(tasks.length);
};