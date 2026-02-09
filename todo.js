//
import { elements, renderTask, toggleEmptyState, clearInput } from './ui.js';

export const initTodo = () => {
    // 1. Affichi l-tasks li déjà f storage
    const tasks = getExistingTasks();
    tasks.forEach(task => renderTask(task, handleActionDelete));
    toggleEmptyState(tasks.length);

    // 2. Event listener dial l-ajout
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = addTask(elements.input.value);
        if (newTask) {
            renderTask(newTask, handleActionDelete);
            toggleEmptyState(getExistingTasks().length);
            clearInput();
        }
    });
};

const handleActionDelete = (id, element) => {
    deleteTask(id);
    element.remove();
    toggleEmptyState(getExistingTasks().length);
};
//

//njibo localstorag mn js fin kayn

import { saveTasks, getTasks } from './storage.js';
//l input dkhl lina gha l2ar9am o l7orof 
let tasks = getTasks();
const validTitle = (title) => {
    const rule = /^[a-zA-Z0-9\s]+$/;
    return rule.test(title);
};

export const addTask = (title) => {
    //nvalidiw  l input b3da 
    if(!validTitle(title) || title.trim() === ""){
        console.error("Titre non valide ");
        return null;
    }
    // cree objet
    const newTask ={
        id : Date.now(),
        title: title,
        completed : false

    };

    // mettre a jour l'array o storage
    tasks.push(newTask);
    saveTasks(tasks);

    return newTask;
};

// delete Tesk
export const deleteTask = (id)=> {
tasks = tasks.filter(tasks => tasks.id !== id);
saveTasks(tasks);
};
export const getExistingTasks = () => tasks ;
